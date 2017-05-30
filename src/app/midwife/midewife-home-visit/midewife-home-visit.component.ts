import { DoctorNotificationsComponent } from '../../doctor/doctor-notifications/doctor-notifications.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MidwifeService } from '../midwife.service';


import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



import{ChildVisit}from './ChildVisit';


@Component({
  selector: 'app-midewife-home-visit',
  templateUrl: './midewife-home-visit.component.html',
  styleUrls: ['./midewife-home-visit.component.css']
})
export class MidewifeHomeVisitComponent implements OnInit {

  constructor(public fb: FormBuilder,public midwifeService:MidwifeService) { }

  childDetails;
  userdetails;  
  childVisit:ChildVisit[];

  ngOnInit() {

    this.childDetails = JSON.parse(localStorage.getItem('SelectedChild'));
    this.userdetails=JSON.parse(localStorage.getItem('currentUser'));

  }



    public ChildVisit = this.fb.group({
          weight: [""],
          height:[""],
          NoteForDoctor:[""],
          NoteForMother:[""],


        });


Update() {

    
 
   
  var newChildVisit={
    weight: this.ChildVisit.value.weight,
    height: this.ChildVisit.value.weight,
    note_Doctor: this.ChildVisit.value.NoteForDoctor,
    note_Mother: this.ChildVisit.value.NoteForMother,
    childID:this.childDetails.childId,
    midwifeID:this.userdetails.nic,
  
  }
   
  
    console.log(newChildVisit);



  this.midwifeService.childVisit(newChildVisit)
    .subscribe(user=>{this.childVisit.push(user);
                      
  });

}   




}
