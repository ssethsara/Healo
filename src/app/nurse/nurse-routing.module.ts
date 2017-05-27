import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NurseNavComponent } from './nurse-nav/nurse-nav.component';
import { NurseNotificationComponent } from './nurse-notification/nurse-notification.component';


import { NurseSearchChildComponent } from './nurse-search-child/nurse-search-child.component';
import { NurseVaccinationComponent } from './nurse-vaccination/nurse-vaccination.component';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';

import { ChildWindowComponent } from '../child-window/child-window.component';
import { ImmunizationTableComponent } from '../child-window/immunization-table/immunization-table.component';
import { WeightComponent } from '../charts/weight/weight.component';



import { SendMessageComponent } from '../common/send-message/send-message.component';

import { ScheduleComponent } from '../common/schedule/schedule.component';

const nurseRoute: Routes = [
  {
    path: 'nurse',
    component: NurseNavComponent,
    children: [   
          {
            path: '',
            component: NurseDashboardComponent
          },
          {
            path: 'dashboard',
            component: NurseDashboardComponent
          },
          {
            path: 'messages',
            component:SendMessageComponent
          },
           {
            path: 'schedule',
            component:ScheduleComponent
          },
          {
            path: 'searchchild',
            component: NurseSearchChildComponent,
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
                                        path: 'Vaccinate',
                                        component: NurseVaccinationComponent
                                      },
                                      
                                ] 
                              } 
                              
                        ] 
          },
          
          {
            path: 'notification',
            component: NurseNotificationComponent
          },
           
       
        ]
      }
    
  
];



@NgModule({
  imports: [
    RouterModule.forChild(nurseRoute)
  ],
   exports: [
    RouterModule
  ]
})
export class NurseRoutingModule { }
