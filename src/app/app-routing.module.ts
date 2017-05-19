import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { NotFoundComponent }   from './not-found/not-found.component';
import { ApiComponent } from './api/api.component';


const ROUTES = [


   {path: 'users/login', component: LoginComponent},
  {path: 'users/signup', component: SignupComponent},
  {path: 'api', component: ApiComponent},

  {path: '',redirectTo: 'users/login',pathMatch: 'full'},
 // { path: '**', component: NotFoundComponent },
  //{
    //path: 'posts',
   // component: SearchComponent
  //},

 


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
