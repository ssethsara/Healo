import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorNavComponent } from './doctor-nav/doctor-nav.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

import { DoctorSearchChildComponent } from './doctor-search-child/doctor-search-child.component';
import { DoctorContactsComponent } from './doctor-contacts/doctor-contacts.component';
import { DoctorStatisticsComponent } from './doctor-statistics/doctor-statistics.component';
import { DoctorNotificationsComponent } from './doctor-notifications/doctor-notifications.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';


import { ChildDisplayComponent } from '../SearchChild/child-display/child-display.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChildSearchComponent } from '../SearchChild/child-search/child-search.component';
import { AppCommonModule }        from '../common/app-common.module';
import { ChildCheckupComponent } from './doctor-search-child/child-checkup/child-checkup.component';
import { CheckupService } from './doctor-search-child/child-checkup/checkup.service';

@NgModule({
  imports: [
    CommonModule,
   Ng2FilterPipeModule,
    DoctorRoutingModule,
    FormsModule,AppCommonModule ,ReactiveFormsModule
  ],
  declarations: [
    DoctorNavComponent,
    DoctorDashboardComponent,
 
    DoctorSearchChildComponent,
    DoctorContactsComponent,
    DoctorStatisticsComponent,
    DoctorNotificationsComponent,
    DoctorScheduleComponent,ChildCheckupComponent,

    ChildSearchComponent,
    ChildDisplayComponent,
   
  ],
  providers:[CheckupService],
  exports: [ChildSearchComponent,ChildCheckupComponent]
})
export class DoctorModule { }
