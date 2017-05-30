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
import { MidewifeHomeVisitComponent } from './midewife-home-visit/midewife-home-visit.component';

import { MidwifeService } from './midwife.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MidwifeRoutingModule,DoctorModule,AppCommonModule,FormsModule, ReactiveFormsModule
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
            
           
              
                MidewifeHomeVisitComponent,
           
                ],

                providers:[MidwifeService]
})
export class MidwifeModule { }
