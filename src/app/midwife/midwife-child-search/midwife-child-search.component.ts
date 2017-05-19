import { Component, OnInit } from '@angular/core';
import { ChildSearchComponent } from '../../SearchChild/child-search/child-search.component';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-midwife-child-search',
  templateUrl: './midwife-child-search.component.html',
  styleUrls: ['./midwife-child-search.component.css']
})
export class MidwifeChildSearchComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

}
