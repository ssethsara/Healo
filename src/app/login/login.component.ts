import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router }from '@angular/router';

import{Login}from '../Classes/login';

import{LoginUser}from '../Classes/LoginUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb2: FormBuilder,public userservice:UserService,private router: Router ) { }

  ngOnInit() {

   this.checkLogged();

  }

  checkLogged(){
     this.userservice.checkLogin().subscribe(posts => {
                  //posts = JSON.stringify(posts);
                  this.loginPerson=posts;
                   console.log(this.loginPerson);

                   

                   if(posts!=false)
                   {
                     localStorage.setItem('currentUser', JSON.stringify(this.loginPerson));
                     this.profile = JSON.parse(localStorage.getItem('currentUser'));

                     console.log(this.loginPerson.role);

                     

                    
                        switch (this.loginPerson.role)
                        {
                          case 1 :
                            this.router.navigate(['admin']);
                            break;
                          case 2 :
                            this.router.navigate(['doctor']);
                            break;
                          case 3 :
                            this.router.navigate(['mother']);
                            break;
                          case 4 :
                            this.router.navigate(['midwife']);
                            break;
                          case 5 :
                            this.router.navigate(['nurse']);
                            break;
                                
                         default : console.log('Error');
                        }

                   }
              });

  }



    profile:LoginUser;
    loginPerson:LoginUser;

    login:Login;

     public loginForm = this.fb2.group({
  
    loginemail: ["", Validators.required],
    loginpassword: ["", Validators.required],

  });


loginUser(event) {

  
  event.preventDefault();
  var loginUser={
 
    email: this.loginForm.value.loginemail,
    password: this.loginForm.value.loginpassword,
 
  }




  this.userservice.loginUser(loginUser)
  
    .subscribe(login=>{this.login=login}),
                 this.checkLogged(); 
                      
 

  


}
}




