import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOkrComponent } from './display-okr.component';

describe('DisplayOkrComponent', () => {
  let component: DisplayOkrComponent;
  let fixture: ComponentFixture<DisplayOkrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOkrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
