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


@NgModule({
  imports: [
    CommonModule,
    DoctorModule,
    NurseRoutingModule,
    AppCommonModule
  ],
  declarations: [
    NurseNotificationComponent,

  NurseSearchChildComponent,
  NurseVaccinationComponent,
  NurseDashboardComponent,
  NurseNavComponent,
 
  ]
})
export class NurseModule { }
