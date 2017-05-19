import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MothernevComponent } from './mothernev/mothernev.component';
import { MotherDashboardComponent } from './mother-dashboard/mother-dashboard.component';
import { MotherChildListComponent } from './mother-child-list/mother-child-list.component';
import { MotherModuleRoutingModule } from './mother-module-routing.module';

import { MotherContactsComponent } from './mother-contacts/mother-contacts.component';

import { MotherNotificationsComponent } from './mother-notifications/mother-notifications.component';



import {ScheduleModule,DialogModule,CalendarModule,CheckboxModule} from 'primeng/primeng';
import { HeightComponent } from '../charts/height/height.component';
import { WeightComponent } from '../charts/weight/weight.component';
import {ChartModule,GrowlModule} from 'primeng/primeng';
import { AppCommonModule }        from '../common/app-common.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MotherModuleRoutingModule,
    ScheduleModule,DialogModule,CalendarModule,CheckboxModule,ChartModule
    ,GrowlModule,AppCommonModule
  
  ],
  declarations: [
    
    MothernevComponent,
    MotherDashboardComponent,
    MotherChildListComponent,

    MotherContactsComponent,

    MotherNotificationsComponent,

   WeightComponent,
    HeightComponent,

    
  ],
  
})
export class MotherModuleModule { }
