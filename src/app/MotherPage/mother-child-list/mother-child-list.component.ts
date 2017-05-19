import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router }            from '@angular/router';

import { Child } from '../../child-window/class/child';
import { ChildService } from '../../child-window/child.service';


@Component({
  moduleId: module.id,
  selector: 'app-mother-child-list',
  templateUrl: './mother-child-list.component.html',
  styleUrls: ['./mother-child-list.component.css'],
  providers: [ChildService]
})
export class MotherChildListComponent implements OnInit {

  errorMessage: string;
  children: Child[];
  //mode = 'Observable';

  currentChild:Child;



  oneChild:Child;

  constructor (private childservice: ChildService, private router: Router,private route: ActivatedRoute) {}










   ngOnInit(): void {
   
  }
 /* getchildren() {
    
    this.childservice.getChildren()
                     .subscribe(
                       children => this.children = children,
                       error =>  this.errorMessage = <any>error);
  }*/

 

  /*addchild(name: string) {
    if (!name) { return; }
    this.childservice.addchild(name)
                     .subscribe(
                       hero  => this.children.push(hero),
                       error =>  this.errorMessage = <any>error);
  }*/



 

onSelect(child: Child): void {
    this.currentChild = child;
  }
 /* gotoDetail(child: Child): void {
     this.currentChild = child;
    this.router.navigate(['./mother/children/child', { id: this.currentChild.id}]);

    // this.router.navigate(['/child', { id: this.currentChild.id}]);
  }*/


}
