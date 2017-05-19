import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ChildSearchService } from '../search.service';


import { Child } from '../../Classes/Child';



@Component({
  selector: 'app-child-search',
  templateUrl: './child-search.component.html',
  styleUrls: ['./child-search.component.css'],
  providers: [ChildSearchService]
})
export class ChildSearchComponent  {


  routhCheck=false;
  RouteStore;
  link;

  children: Observable<Child[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private childSearchService: ChildSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.children = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.childSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Child[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Child[]>([]);
      });
  }


  
  gotoDetail(child: Child): void {
    
    


    if(this.routhCheck==false){
      this.RouteStore=this.router.url;
      this.link = [this.RouteStore,'child', child.childId];
      
      this.routhCheck=true;
    }
    else{
      this.link = [this.RouteStore,'child', child.childId];
    }
    
    this.router.navigate(this.link);
  }
}