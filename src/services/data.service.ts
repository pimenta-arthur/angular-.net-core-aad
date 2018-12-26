import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICustomer } from '../shared/interfaces';
import { catchError } from 'rxjs/operators';
import { Adal5HTTPService, Adal5Service } from 'adal-angular5';


@Injectable()
export class DataService {
    
    private url: string = 'http://localhost:5000/api/customers';
    
    constructor(
        private http: HttpClient,
        private adal5Service: Adal5Service
    ) { }

    /** GET heroes from the server */
    getCustomers(): Observable<ICustomer[]> {
        const options = this.prepareOptions();
        return this.http.get(this.url, options)
                   .pipe(
                    catchError(this.handleError)
                  );
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private prepareOptions():any{
        let headers = new HttpHeaders();
               headers = headers
                   .set('Content-Type', 'application/json')
                   .set('Authorization', `Bearer ${this.adal5Service.userInfo.token}`);
               return { headers };
       }
}