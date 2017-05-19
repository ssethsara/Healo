

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule,JsonpModule  } from '@angular/http';
import { CommonModule }   from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { PostsComponent } from './posts/posts.component';
//import { PostsService } from './posts.service';

import { UserService } from './user.service';
import { ChildSearchService } from './SearchChild/search.service';
import { AddChildService } from './add-child/add-child.service';

//import { DetailsComponent } from './search/tab-hub/details/details.component';
//import { NoteComponent } from './search/tab-hub/note/note.component';
//import { ImmuComponent } from './search/tab-hub/immu/immu.component';
//import { GraphComponent } from './search/tab-hub/graph/graph.component';
//import { SearchPatientsListComponent } from './search/search-patients-list/search-patients-list.component';
//import { SearchComponent } from './search/search.component';
//import { TabHubComponent } from './search/tab-hub/tab-hub.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
//import { SearchPipe } from './search/search-pipe';
//import { CheckUpdatesComponent } from './check-updates/check-updates.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule }        from './app-routing.module';
import { MotherModuleModule }        from './MotherPage/mother-module.module';
import { ChildModule }        from './child-window/child.module';
import { DoctorModule }        from './doctor/doctor.module';
import { MidwifeModule }        from './midwife/midwife.module';
import { NurseModule }        from './nurse/nurse.module';
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemChildService }  from './child-window/class/childData';
import { SignupComponent } from './signup/signup.component';
import { ApiComponent } from './api/api.component';
import { AlertComponent } from './alert/alert.component';
import { AddChildComponent } from './add-child/add-child.component';








@NgModule({
  declarations: [
    AppComponent,
   // PostsComponent,
    LoginComponent,
  //  SearchComponent,
  //  DetailsComponent,
   // NoteComponent,
    //ImmuComponent,
   // GraphComponent,
   // SearchPatientsListComponent,
   // SearchComponent,
    //TabHubComponent,
    //SearchPipe,
    //CheckUpdatesComponent,

    NotFoundComponent,
  SignupComponent,
  ApiComponent,
  AlertComponent,
  AddChildComponent,
 
 

  
 

   // WeightComponent,
 //   HeightComponent
    
    
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule ,
    ChildModule,
    DoctorModule,
    MotherModuleModule,
    MidwifeModule,
    NurseModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    
    //InMemoryWebApiModule.forRoot(InMemChildService),

   
  ],

 // providers:[InMemChildService],
   providers: [UserService,ChildSearchService,AddChildService],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
