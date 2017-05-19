import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mother-dashboard',
  templateUrl: './mother-dashboard.component.html',
  styleUrls: ['./mother-dashboard.component.css']
})
export class MotherDashboardComponent implements OnInit {

  weight;number;
  height:number;
  bmi;
  bmiStatus;

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit() {
  }

  BMIcalculation(weight:number,height:number):any 
  {
    this.bmi=weight*height*height;

    if( (18.5 <= this.bmi)&&(25 >= this.bmi) )
    {
      this.bmiStatus='Normal';
      return 100;
    } else if( (17  <= this.bmi)&&(18.5 >= this.bmi) )
    {
      this.bmiStatus='Mild Thinness';
      return 60;
    }
     else if( (16  <= this.bmi)&&(17 >= this.bmi) )
    {
      this.bmiStatus='Moderate Thinness	';
      return 40;
    }
    else if((16 >= this.bmi) )
    {
      this.bmiStatus='Severe Thinness	';
      return 0;
    }


     else if( (25   <= this.bmi)&&(30 >= this.bmi) )
    {
      this.bmiStatus='Overweight';
      return 80;
    }
      else if( (30   <= this.bmi)&&(35 >= this.bmi) )
    {
      this.bmiStatus='Obese Class I	';
      return 60;
    }
      else if( (35   <= this.bmi)&&(40 >= this.bmi) )
    {
      this.bmiStatus='Obese Class II';
      return 40;
    }
      else if( (40   <= this.bmi) )
    {
      this.bmiStatus='Obese Class II';
      return 0;
    }


  }


}
