import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MidwifeNavComponent } from './midwife-nav/midwife-nav.component';
import { MidwifeDashboardComponent } from './midwife-dashboard/midwife-dashboard.component';
import { MidwifeNotificationsComponent } from './midwife-notifications/midwife-notifications.component';

import { MidwifeAssignedChildsComponent } from './midwife-assigned-childs/midwife-assigned-childs.component';
import { MidwifeChildSearchComponent } from './midwife-child-search/midwife-child-search.component';
import { MidwifeContactsComponent } from './midwife-contacts/midwife-contacts.component';

import { MidwifeStatComponent } from './midwife-stat/midwife-stat.component';
import { ChildWindowComponent } from '../child-window/child-window.component';
import { ImmunizationTableComponent } from '../child-window/immunization-table/immunization-table.component';
import { WeightComponent } from '../charts/weight/weight.component';
import { ChildCheckupComponent } from '../child-window/child-checkup/child-checkup.component';
import { AddChildComponent } from '../add-child/add-child.component';

import { SendMessageComponent } from '../common/send-message/send-message.component';

import { ScheduleComponent } from '../common/schedule/schedule.component';

import { MidewifeHomeVisitComponent } from './midewife-home-visit/midewife-home-visit.component';

const midwifeRoute: Routes = [
  {
    path: 'midwife',
    component: MidwifeNavComponent,
    children: [   
          {
            path: '',
            component: MidwifeDashboardComponent
          }, 
          {
            path: 'dashboard',
            component: MidwifeDashboardComponent
          }, 
          {
            path: 'stat',
            component: MidwifeStatComponent
          }, 
          {
            path: 'notification',
            component: MidwifeNotificationsComponent
          }, 
          {
            path: 'messages',
            component: SendMessageComponent
          }, 
          {
            path: 'assigned',
            component: MidwifeAssignedChildsComponent
          }, 
          {
            path: 'contacts',
            component: MidwifeContactsComponent
          }, 
          {
            path: 'schedule',
            component: ScheduleComponent
          },  
           {
            path: 'searchchild',
            component: MidwifeChildSearchComponent,
            children: [
                              {
                                path: 'add_child',
                                component: AddChildComponent,
                              },
                               
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
                                      {
                                        path: 'HomeVisit',
                                        component: MidewifeHomeVisitComponent
                                      },
                                      
                                ] 
                              } 
                              
                        ] 
          },     
        ]
      }
    
  
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(midwifeRoute)
  ],
   exports: [
    RouterModule
  ],
  declarations: []
})
export class MidwifeRoutingModule { }
