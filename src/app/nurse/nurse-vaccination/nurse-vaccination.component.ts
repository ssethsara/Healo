
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VaccineService } from './vaccine.service';


import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import{Vaccine}from './vaccine';
import{Injection}from './Injection';

@Component({
  selector: 'app-nurse-vaccination',
  templateUrl: './nurse-vaccination.component.html',
  styleUrls: ['./nurse-vaccination.component.css']
})
export class NurseVaccinationComponent implements OnInit {

  constructor(public fb: FormBuilder,public vaccineService:VaccineService) { }


  childDetails;
  userdetails;


  listopen=false;
  injectionDetails;

   injection: Observable<Injection[]>;
  private searchTerms = new Subject<string>();

  ngOnInit(): void  {

          this.childDetails = JSON.parse(localStorage.getItem('SelectedChild'));
          this.userdetails=JSON.parse(localStorage.getItem('currentUser'));

          console.log(this.userdetails);


          this.injection = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.vaccineService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Injection[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Injection[]>([]);
      });



  }


   
 
  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(term);
    this.listopen=true;
    this.searchTerms.next(term);
  }
 






    vaccine:Vaccine[];

    injection_name;
    
     public vaccination = this.fb.group({
          injectType: [""],
          remarks:[""]
        });

          


    assign(inject){
        this.injection_name=inject.name;
        this.injectionDetails=inject;
        this.listopen=false;

        console.log(this.injectionDetails);
       // this.vaccination.value.injectType="";
    }

    remove(){
      this.injection_name="";
      this.injectionDetails=null;
    }
     


  given() {

    
 
   
  var newVaccine={
    injection: this.injection_name,
    remarks: this.vaccination.value.remarks,
    childID:this.childDetails.childId,
    nurseID:this.userdetails.nic,
  
  }
   
  
    console.log(newVaccine);



  this.vaccineService.immunization(newVaccine)
    .subscribe(user=>{this.vaccine.push(newVaccine);
                      
  });

}      

}
