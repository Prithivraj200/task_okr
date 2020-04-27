import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../shared/models/response';
import { environment } from './../../environments/environment';

const { api_url: BASE_URL } = environment;

@Injectable({
    providedIn: 'root'
})
export class OKRService {
    constructor(private http: HttpClient) {}

    fetchOKR(): Observable<Response> {
        return this.http.get<Response>(`${BASE_URL}/sample-okrs/db.json`);
    }
}
