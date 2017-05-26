import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import{AddChild}from '../Classes/AddChild';

@Injectable()
export class AddChildService {

addChildURL='child/AddChild';



  constructor(private http: Http,private router:Router) { }


addChild(newUser): Observable<AddChild> {

   console.log(newUser);
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.addChildURL,JSON.stringify(newUser), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

 private extractData(res: Response) {
  let body = res.json();
  
                        console.log(body.data);
  return body.data || { };
}


private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  
  let errMsg: string;
  
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body|| null);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  //console.error(errMsg);
  return Observable.throw(errMsg);
}


}


