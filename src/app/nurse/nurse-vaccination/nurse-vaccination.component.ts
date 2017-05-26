import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VaccineService } from './vaccine.service';

import{Vaccine}from './vaccine';

@Component({
  selector: 'app-nurse-vaccination',
  templateUrl: './nurse-vaccination.component.html',
  styleUrls: ['./nurse-vaccination.component.css']
})
export class NurseVaccinationComponent implements OnInit {

  constructor(public fb: FormBuilder,public vaccineService:VaccineService) { }

  ngOnInit() {
  }
    vaccine:Vaccine[];

    injection;
    
     public vaccination = this.fb.group({
          injectType: [""],
          remarks:[""]
        });

          


    assign(){
        this.injection=this.vaccination.value.injectType;
        this.vaccination.value.injectType="";
    }

    remove(){
      this.injection="";
    }
     


  given() {

    
 
   
  var newVaccine={
    injection: this.injection,
    remarks: this.vaccination.value.remarks,
   
   
  }
   
  




  this.vaccineService.immunization(newVaccine)
    .subscribe(user=>{this.vaccine.push(user);
                      
  });

}      

}
