import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseNavComponent } from './nurse-nav/nurse-nav.component';
import { NurseNotificationComponent } from './nurse-notification/nurse-notification.component';

import { NurseSearchChildComponent } from './nurse-search-child/nurse-search-child.component';
import { NurseVaccinationComponent } from './nurse-vaccination/nurse-vaccination.component';

import { NurseRoutingModule } from './nurse-routing.module';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';
import { DoctorModule }        from '../doctor/doctor.module';
import { AppCommonModule }        from '../common/app-common.module';

import { VaccineService }        from './nurse-vaccination/vaccine.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DoctorModule,
    NurseRoutingModule,
    AppCommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    NurseNotificationComponent,

  NurseSearchChildComponent,
  NurseVaccinationComponent,
  NurseDashboardComponent,
  NurseNavComponent,
 
  ],
  providers:[VaccineService]
})
export class NurseModule { }
