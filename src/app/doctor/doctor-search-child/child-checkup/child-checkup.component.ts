import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckupService } from './checkup.service';


import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import{Allergie}from './classes/Allergie';
import{Medicine}from './classes/Medicine';
import{GivenMedicine}from './classes/GivenMedicine';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';





@Component({
  selector: 'app-child-checkup',
  templateUrl: './child-checkup.component.html',
  styleUrls: ['./child-checkup.component.css']
})
export class ChildCheckupComponent implements OnInit {


  childDetails;
  userdetails;

  fullRecord;

  allergies;
  medicines;

 constructor(public fb: FormBuilder,public checkupService:CheckupService) { }

  allergieListopen=false;
  allergieDetails;


  sendReport;


  medListopen=false;
  medDetails;
 // medAmount_perday;
 // medAmount_perday_duration;

   allergie: Observable<Allergie[]>;
  private searchTerms = new Subject<string>();

medicine: Observable<Medicine[]>;
  private searchTermsMed = new Subject<string>();
 

  ngOnInit():void  {

     this.childDetails = JSON.parse(localStorage.getItem('SelectedChild'));
     this.userdetails=JSON.parse(localStorage.getItem('currentUser'));


        this.allergie = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.checkupService.searchAllerge(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Allergie[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Allergie[]>([]);
      })



      this.medicine = this.searchTermsMed
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.checkupService.searchMed(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Medicine[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Medicine[]>([]);
      })


      console.log(this.childDetails.childId);
      this.checkupService.full_record(this.childDetails.childId)
     .subscribe(record=>{this.fullRecord=record;
     
               console.log(this.fullRecord[0]);


   //  this.allergies=this.fullRecord[0].allergies_lists;
    this.medicines=this.fullRecord[0].medicines;


    console.log(this.medicines);
  
});


  }


  




  public checkup = this.fb.group({
          MotherNote: [""],
          MidwifeNote:[""],
          NoteforNurse:[""]
        });


 

  allergySearch(term: string): void {
    console.log(term);
   this.allergieListopen=true;
    this.searchTerms.next(term);
    
  }


  medSearch(term: string): void {
    console.log(term);
   this.medListopen=true;
    this.searchTermsMed.next(term);
    
  }


  allergieAssign(allergie){
        
        this.allergieDetails=allergie;
        this.allergieListopen=false;
   
    }

    allergieRemove(){
      
        this.allergieDetails=null;
      }
    


     medAssign(med){
        
        this.medDetails=med;
        this.medListopen=false;
   
    }

    medRemove(){
      
        this.medDetails=null;
      }
     


send()
{


  var newCheckup={
    allergies: this.allergieDetails.allergieId,
    medicines: this.medDetails.id,
    MotherNote:this.checkup.value.MotherNote,
    MidwifeNote:this.checkup.value.MidwifeNote,
    NoteforNurse:this.checkup.value.NoteforNurse,
    childID:this.childDetails.childId,
    doctorId:this.userdetails.nic,

  
  }
   
  
    console.log(newCheckup);



  this.checkupService.reportSend(newCheckup)
    .subscribe(user=>{this.sendReport.push(newCheckup);
                      
  });

}      

}
