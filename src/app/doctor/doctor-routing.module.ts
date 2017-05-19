import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorNavComponent } from './doctor-nav/doctor-nav.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

import { DoctorSearchChildComponent } from './doctor-search-child/doctor-search-child.component';
import { DoctorContactsComponent } from './doctor-contacts/doctor-contacts.component';
import { DoctorStatisticsComponent } from './doctor-statistics/doctor-statistics.component';
import { DoctorNotificationsComponent } from './doctor-notifications/doctor-notifications.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { ChildWindowComponent } from '../child-window/child-window.component';
import { ImmunizationTableComponent } from '../child-window/immunization-table/immunization-table.component';
import { WeightComponent } from '../charts/weight/weight.component';
import { ChildCheckupComponent } from '../child-window/child-checkup/child-checkup.component';
import { SendMessageComponent } from '../common/send-message/send-message.component';

import { ScheduleComponent } from '../common/schedule/schedule.component';

const doctorRoute: Routes = [
  {
    path: 'doctor',
    component: DoctorNavComponent,
    children: [   
          {
            path: '',
            component: DoctorDashboardComponent
          },
          {
            path: 'dashboard',
            component: DoctorDashboardComponent
          },
          {
            path: 'messages',
             component: SendMessageComponent
          },
          {
            path: 'searchchild',
            component: DoctorSearchChildComponent,
             children: [
                              {
                                
                                    path: 'child/:id',
                                    component: ChildWindowComponent,
                                     children: [
                                      {
                                        
                                            path: 'immu',
                                            component: ImmunizationTableComponent
                                      } ,
                                      {
                                        path: 'weight',
                                        component: WeightComponent
                                      },
                                      {
                                        path: 'checkup',
                                        component: ChildCheckupComponent
                                      },
                                      
                                ] 
                              } 
                              
                        ] 
          },
          {
            path: 'contacts',
            component: DoctorContactsComponent
          },
          {
            path: 'stat',
            component: DoctorStatisticsComponent
          },
          {
            path: 'notification',
            component: DoctorNotificationsComponent
          },
          {
            path: 'schedule',
            component: ScheduleComponent
          },
        ]
      }
    
  
];


@NgModule({
  imports: [
    RouterModule.forChild(doctorRoute)
  ],
   exports: [
    RouterModule
  ]
})



export class DoctorRoutingModule { }
