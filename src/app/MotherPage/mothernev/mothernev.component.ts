import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import{LoginUser}from '../../Classes/LoginUser';
import { Router }from '@angular/router';

@Component({
  selector: 'app-mothernev',
  templateUrl: './mothernev.component.html',
  styleUrls: ['./mothernev.component.css']
})
export class MothernevComponent implements OnInit {


 
logoutcheck;

 constructor(private userservice:UserService,private router:Router) { }

   





 logout(){
    console.log("logout....");
          
          this.userservice.logout().subscribe(loggedout=>{this.logoutcheck=loggedout;
              console.log(this.logoutcheck);
              localStorage.removeItem('currentUser');
              this.router.navigate(['/']);
              console.log("logout end test");
      });
    
    
     
     
  }



  ngOnInit() {
  }

}
