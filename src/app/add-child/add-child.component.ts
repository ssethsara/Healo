import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AddChildService } from './add-child.service';
import{AddChild}from '../Classes/AddChild';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {

  constructor(public fb: FormBuilder,public addChildService:AddChildService) { }

  ngOnInit() {
  }
    addChild:AddChild[];

     public ChildRegForm = this.fb.group({
          firstName: [""],
          lastName: [""],
          surname: [""],
          dateOfBirth: [""],
          blood: [""],
          gender: [""],
          motherid: [""]
         
        });


  postChild(event) {

    console.log(event);

  event.preventDefault();
  var newUser={
    firstName: this.ChildRegForm.value.firstName,
    lastName: this.ChildRegForm.value.lastName,
    surname: this.ChildRegForm.value.surname,
    dateOfBirth: this.ChildRegForm.value.dateOfBirth,
    blood: this.ChildRegForm.value.blood,
    gender: this.ChildRegForm.value.gender,
    motherid: this.ChildRegForm.value.motherid,
   
  }




  this.addChildService.addChild(newUser)
    .subscribe(user=>{this.addChild.push(user);
                      
  });

}      

}
