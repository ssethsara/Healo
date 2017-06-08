import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';


import{Allergie}from './classes/Allergie';
import{Medicine}from './classes/Medicine';
import{GivenMedicine}from './classes/GivenMedicine';

@Injectable()
export class CheckupService {

 constructor(private http: Http,private router:Router) { }


   searchAllerge(term:string): Observable<Allergie[]> {
    

    return this.http
               .get(`clinic/allergie/search/${term}`)
               .map(res =>res.json());
  }


  searchMed(term:string): Observable<Medicine[]> {
    
console.log(term);
    return this.http
               .get(`clinic/med/search/${term}`)
               .map(res =>res.json());
  }



  Other_alergies(id:string): Observable<Allergie[]> {
    

    return this.http
               .get(`clinic/allergie/other/${id}`)
               .map(res =>res.json());
  }

}
