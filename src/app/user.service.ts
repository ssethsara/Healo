import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import{User}from './Classes/Users';
import{Login}from './Classes/login';

@Injectable()
export class UserService {

  constructor(private http: Http,private router:Router) { }


  signupUrl='users/signup';
  loginURL='users/login';


//AddUsers

 addUser(newUser): Observable<User> {

   console.log(newUser);
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.signupUrl,JSON.stringify(newUser), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


//login

loginUser(userLogin): Observable<Login> {

  
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginURL,JSON.stringify(userLogin), options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

getUser(){
    this.http.get('users/auth/userdata', {withCredentials: true})
    .map(res => {return res.json()});
}


logout(){
    this.http.get('users/auth/logout')
    .map(res => {return res.json()});
}


  private extractData(res) {
  let body = res.json();
  
                      
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



checkLogin(){
  return this.http.get('users/auth/data')
      .map(res => res.json());
}



}
