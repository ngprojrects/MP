import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

import { SalesSummaryModel } from '../models/sales-summary-model';


@Injectable({
  providedIn: 'root'
})
export class SalesSummaryService {

  basePath = environment.apiUrl;

  constructor(private http: HttpClient) {
    if (!environment.production) {
      console.log('API: ' + this.basePath);
    }
  }

  getSalesSummary(token: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization-Token': '2CA0A0CF-C504-44F9-B555-0D84AE67A3C2',
        'Ocp-Apim-Subscription-Key': '07b4d8fb47a149009643a317cb31840e'
      })
    };

    return this.http.post<SalesSummaryModel>(this.basePath + 'sales/summary', JSON.stringify(data), httpOptions )
      .pipe( retry(3 ), catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      alert('Unable to connect.');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }



}
