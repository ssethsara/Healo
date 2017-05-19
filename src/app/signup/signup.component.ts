import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import{User}from '../Classes/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder,public userservice:UserService ) { }

  ngOnInit() {
  }

    user:User[];
    errorMessage="error";

   public signupForm = this.fb.group({
    firstName: [""],
    lastName: [""],
    nic: [""],
    address: [""],
    phoneNo: [""],
    email: ["", Validators.required],
    password: ["", Validators.required],
    password2: [""],
    role: [],
  });


    




  doLogin(event) {
    console.log(event);
    console.log(this.signupForm.value);
  }

addUser(event) {

  
  event.preventDefault();
  var newUser={
    firstName: this.signupForm.value.firstName,
    lastName: this.signupForm.value.lastName,
    nic: this.signupForm.value.nic,
    address: this.signupForm.value.address,
    phoneNo: this.signupForm.value.phoneNo,
    email: this.signupForm.value.email,
    password: this.signupForm.value.password,
    password2: this.signupForm.value.password2,
    role: this.signupForm.value.role,
  }




  this.userservice.addUser(newUser)
    .subscribe(user=>{this.user.push(user);
                      
  });

}
}
