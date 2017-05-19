import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import { CanDeactivateGuard }     from '../child-window/can-deactivate-guard.service';
//import { ChildDetailResolver }   from '../child-window/child-detail-resolver.service';
import { MothernevComponent } from './mothernev/mothernev.component';
import { MotherDashboardComponent } from './mother-dashboard/mother-dashboard.component';
import { MotherChildListComponent } from './mother-child-list/mother-child-list.component';
import { ChildWindowComponent } from '../child-window/child-window.component';
import { ImmunizationTableComponent } from '../child-window/immunization-table/immunization-table.component';
import { MotherContactsComponent } from './mother-contacts/mother-contacts.component';

import { MotherNotificationsComponent } from './mother-notifications/mother-notifications.component';
import { WeightComponent } from '../charts/weight/weight.component';
import { SendMessageComponent } from '../common/send-message/send-message.component';
import { ScheduleComponent } from '../common/schedule/schedule.component';


const MotherRoutes: Routes = [
  {
    path: 'mother',
    component: MothernevComponent,
    children: [
          {
            path: '',
            component: MotherDashboardComponent
          },
          {
            path: 'dashboard',
            component: MotherDashboardComponent
          },
          {
            path: 'schedule',
            component: ScheduleComponent
          },
          {
            path: 'econtacts',
            component: MotherContactsComponent
          },
           {
            path: 'sendmsg',
            component: SendMessageComponent
          },
          {
            path: 'notifications',
            component: MotherNotificationsComponent
          },

          
          {
            path: 'children',
            component: MotherChildListComponent,
              children: [
                      {
                        path: 'immu',
                        component:  ImmunizationTableComponent,
                        children: [
                              {
                                
                                    path: 'immu',
                                    component: ImmunizationTableComponent
                                  }]  
                              } ,  
                              {
                                 path: 'weight',
                                  component:  WeightComponent,
                              }
                        ] 
                      }
                     
              ]
          }
        ];
      

@NgModule({
  imports: [
    RouterModule.forChild(MotherRoutes)
  ],
   exports: [
    RouterModule
  ],
  providers: [
 //   ChildDetailResolver
  ]
})
export class MotherModuleRoutingModule { }
