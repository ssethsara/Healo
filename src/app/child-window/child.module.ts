import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { DoctorRoutingModule } from '../doctor/doctor-routing.module';

import { ImmunizationTableComponent } from './immunization-table/immunization-table.component';
import { ChildRoutingModule } from './child-routing.module';
//import { HeightComponent } from '../charts/height/height.component';
import { WeightComponent } from '../charts/weight/weight.component';
import { ChildWindowComponent } from './child-window.component';
import { DoctorModule }        from '../doctor/doctor.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChildRoutingModule,ReactiveFormsModule,DoctorModule
  ],
  declarations: [
      //HeightComponent,
     // WeightComponent,
    ChildWindowComponent,
      ImmunizationTableComponent,
     
  ],
  providers:[],
  exports: [ChildWindowComponent,ImmunizationTableComponent]
})


export class ChildModule { }
