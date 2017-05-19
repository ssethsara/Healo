import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MidwifeRoutingModule } from './midwife-routing.module';

import { MidwifeNavComponent } from './midwife-nav/midwife-nav.component';
import { MidwifeDashboardComponent } from './midwife-dashboard/midwife-dashboard.component';
import { MidwifeNotificationsComponent } from './midwife-notifications/midwife-notifications.component';

import { MidwifeAssignedChildsComponent } from './midwife-assigned-childs/midwife-assigned-childs.component';
import { MidwifeChildSearchComponent } from './midwife-child-search/midwife-child-search.component';
import { MidwifeContactsComponent } from './midwife-contacts/midwife-contacts.component';
import { MidwifeScheduleComponent } from './midwife-schedule/midwife-schedule.component';

import { MidwifeStatComponent } from './midwife-stat/midwife-stat.component';
import { DoctorModule }        from '../doctor/doctor.module';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,MidwifeRoutingModule,DoctorModule,AppCommonModule
  ],
  declarations: [MidwifeNavComponent,
  MidwifeDashboardComponent,
   MidwifeNotificationsComponent,
    
     MidwifeAssignedChildsComponent,
      MidwifeChildSearchComponent,
       MidwifeContactsComponent,
        MidwifeScheduleComponent,
         MidwifeScheduleComponent,
          MidwifeContactsComponent,
           MidwifeChildSearchComponent,
            
           
              
                MidwifeStatComponent,
           
                ]
})
export class MidwifeModule { }
