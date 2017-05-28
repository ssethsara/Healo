import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Child }           from '../Classes/Child';
@Injectable()

export class ChildService {

  constructor(private http: Http) {}
  getChild(id: Number) {
    return this.http
               .get(`api/child/${id}`)
               .map(res =>res.json());
  }


    getImmu(id: Number) {
    return this.http
               .get(`clinic/vaccine/details/${id}`)
               .map(res =>res.json());
  }
 
} 