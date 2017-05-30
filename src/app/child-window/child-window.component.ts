import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }               from '@angular/common';
import { Router }            from '@angular/router';

import { Child } from '../Classes/Child';
import { ChildService } from './child.service';

import{LoginUser}from '../Classes/LoginUser';

@Component({
  moduleId: module.id,
  selector: 'app-child-window',
  templateUrl: './child-window.component.html',
  styleUrls: ['./child-window.component.css'],
  providers: [ChildService],
  inputs:['child']
  
})
export class ChildWindowComponent implements OnInit, OnDestroy {

  profile:LoginUser;
  childId: number;
  private sub: any;
  child: Child;
 childDetails;

  routeCheck=false;
  routeStore;

  link;

  checkORVaccin='Disabled';
  checVaccineEnabled=false;

  constructor(
    private childService: ChildService,
    private route: ActivatedRoute,
    private router: Router,
  ) {} 

  

  ngOnInit(): void {


    this.routeStore=this.router.url;

     this.profile = JSON.parse(localStorage.getItem('currentUser'));

           switch (this.profile.role)
                        {
                          case 2 :
                            this.checkORVaccin='checkup';
                            this.checVaccineEnabled=true;
                            break;
                          
                          case 4 :
                            this.checkORVaccin='HomeVisit';
                            this.checVaccineEnabled=true;
                            break;
                          
                          case 5 :
                             this.checkORVaccin='Vaccinate';
                             this.checVaccineEnabled=true;
                            break;
                                
                         default : console.log('Error');
                        }    

    this.sub = this.route.params.subscribe(params => {
       this.childId = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
      this.childService.getChild(this.childId)
      .subscribe(child=>{this.child=child;
      

      localStorage.setItem('SelectedChild', JSON.stringify(this.child));
  
});


      

      
     });

      

    
  }


  


  RoleAction(){



/*
     if(this.routeCheck==false){
      this.routeStore=this.router.url;
      this.link = [this.routeStore,this.checkORVaccin];
      
      this.routeCheck=true;
    }
    else{
      this.link = [this.routeStore,this.checkORVaccin];
    }
    
    this.router.navigate(this.link);


*/

   // localStorage.removeItem('SelectedChild');
      
      
      


    this.link = [this.routeStore,this.checkORVaccin];
   
    
    this.router.navigate(this.link);
  }


  ngOnDestroy() {
    localStorage.removeItem('SelectedChild');
    this.sub.unsubscribe();
    this.childId=null;
  }

}
