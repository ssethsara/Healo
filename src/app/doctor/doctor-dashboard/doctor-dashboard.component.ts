import { Component, OnInit } from '@angular/core';
import{LoginUser}from '../../Classes/LoginUser';
import { Router }from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  profile:LoginUser;

  ngOnInit() {
   
                     this.profile = JSON.parse(localStorage.getItem('currentUser'));

                     console.log(this.profile); 
  }

}
