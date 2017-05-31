import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import{LoginUser}from '../../Classes/LoginUser';
import { Router }from '@angular/router';

@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.css']
})
export class DoctorNavComponent implements OnInit {

  profile:LoginUser;

  logoutcheck;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {

   
        
         this.profile = JSON.parse(localStorage.getItem('currentUser'));
    
   
      
   
  
    

  }

  logout(){
    console.log("logout....");
          
          this.userservice.logout().subscribe(loggedout=>{this.logoutcheck=loggedout;
              console.log(this.logoutcheck);
              localStorage.removeItem('currentUser');
              this.router.navigate(['/']);
              console.log("logout end test");
      });
    
    
     
     
  }

}
