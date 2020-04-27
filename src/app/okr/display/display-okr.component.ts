import { Component, OnInit } from '@angular/core';

import { OKRService } from '../okr.service';
import { OKR, Parent } from '../../shared/models/okr';
import { filterCategories } from './../../shared/config/filter-categories';

@Component({
    selector: 'app-display-okr',
    templateUrl: './display-okr.component.html',
    styleUrls: ['./display-okr.component.scss']
})
export class DisplayOkrComponent implements OnInit {
    category: string;
    okrList: Array<Parent>;
    filters: Array<string>;
    displayOKRList: Array<Parent>;

    constructor(private okrService: OKRService) {
        this.category = '';
        this.okrList = [];
        this.displayOKRList = [];
        this.filters = filterCategories;
    }

    ngOnInit(): void {
        this.fetchOKRList();
    }

    fetchOKRList(): void {
        this.okrService.fetchOKR().subscribe(result => {
            const { data } = result;
            this.groupOKR(data);
        });
    }

    /* group child with it's parent */
    groupOKR(okrList: Array<OKR>): void {
        const okrs = [];
        const parentList = {};
        const childWithoutParent = [];
        let index = 0;
        for (const o of okrList) {
            if (o.parent_objective_id === '' && !parentList[o.id]) {
                (o as Parent).childs = [];
                okrs.push(o);
                parentList[o.id] = index;
                index++;
            } else if (parentList[o.parent_objective_id] >= 0) {
                this.appendChild(o, parentList, okrs);
            } else {
                childWithoutParent.push(o);
            }
        }
        /* non-mapped childs are checked again if parent is found.To avoid Big O with O(n^2), I have ignored the order and checked at end*/
        for (const o of childWithoutParent) {
            if (parentList[o.parent_objective_id]) {
                this.appendChild(o, parentList, okrs);
            }
        }
        this.okrList = okrs;
        this.displayOKRList = okrs;
    }

    appendChild(okr: OKR, parentList: object, okrs: Array<Parent>): void {
        const parentIndex = parentList[okr.parent_objective_id];
        okrs[parentIndex].childs.push(okr);
    }

    filterOKRByCategory(category: string): void {
        this.category = category === this.category ? '' : category;
        if (this.category === '') {
            this.displayOKRList = this.okrList;
        } else {
            this.displayOKRList = this.okrList.filter(
                okr => okr.category === category
            );
        }
    }
}
