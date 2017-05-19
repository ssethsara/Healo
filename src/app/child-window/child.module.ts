import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DoctorRoutingModule } from '../doctor/doctor-routing.module';

import { ImmunizationTableComponent } from './immunization-table/immunization-table.component';
import { ChildRoutingModule } from './child-routing.module';
//import { HeightComponent } from '../charts/height/height.component';
import { WeightComponent } from '../charts/weight/weight.component';
import { ChildWindowComponent } from './child-window.component';
import { ChildCheckupComponent } from './child-checkup/child-checkup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChildRoutingModule,
  ],
  declarations: [
      //HeightComponent,
     // WeightComponent,
    ChildWindowComponent,
      ImmunizationTableComponent,
      ChildCheckupComponent
  ],
  exports: [ChildWindowComponent,ImmunizationTableComponent]
})


export class ChildModule { }
