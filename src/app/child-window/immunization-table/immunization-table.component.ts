import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';

import { Immu } from './Immu';
@Component({
  selector: 'app-immunization-table',
  templateUrl: './immunization-table.component.html',
  styleUrls: ['./immunization-table.component.css']
})
export class ImmunizationTableComponent implements OnInit {

  constructor(private childService: ChildService,) { }

  immunization:Immu;

   childDetails;

  ngOnInit() {

    this.childDetails = JSON.parse(localStorage.getItem('SelectedChild'));
    console.log(this.childDetails.childId);

       this.childService.getImmu(this.childDetails.childId)
      .subscribe(immun=>{this.immunization=immun;
        console.log(this.immunization);
});


    
  }


  

}
