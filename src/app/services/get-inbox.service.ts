import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetInboxService {

  constructor(public http: Http) { }
  getApiModel(endPoint: string, args?: string) {
    return this.http.get(endPoint).map(res => res.json());
  }

}