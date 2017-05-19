import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Child }           from '../Classes/Child';
@Injectable()

export class ChildSearchService {

  constructor(private http: Http) {}
  search(term: string): Observable<Child[]> {
    return this.http
               .get(`api/child/search/${term}`)
               .map(res =>res.json());
  }

 
}