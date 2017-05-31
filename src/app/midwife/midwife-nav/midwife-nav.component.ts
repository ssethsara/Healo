import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import{LoginUser}from '../../Classes/LoginUser';
import { Router }from '@angular/router';
@Component({
  selector: 'app-midwife-nav',
  templateUrl: './midwife-nav.component.html',
  styleUrls: ['./midwife-nav.component.css']
})
export class MidwifeNavComponent implements OnInit {

 constructor(private userservice:UserService,private router:Router) { }


logoutcheck;
  ngOnInit() {
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
