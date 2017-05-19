import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message/send-message.component';
import { InboxComponent } from './send-message/inbox/inbox.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {ScheduleModule,DialogModule,CheckboxModule,CalendarModule} from 'primeng/primeng';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//services
import { ScheduleService } from './schedule/schedule.service';
//import {Schedule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,DialogModule,CheckboxModule,CalendarModule,
    BrowserModule,FormsModule
  ],
  declarations: [InboxComponent,SendMessageComponent, ScheduleComponent]
  ,
  providers:[ScheduleService],
  exports: [SendMessageComponent]
})
export class AppCommonModule { }
