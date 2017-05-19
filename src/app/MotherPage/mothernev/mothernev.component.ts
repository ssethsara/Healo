import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mothernev',
  templateUrl: './mothernev.component.html',
  styleUrls: ['./mothernev.component.css']
})
export class MothernevComponent implements OnInit {

//which button selected
  navButtonSelected;

  //activation call
  dashActive='';
  notificationActive='';
  urHealthActive='';
  massegeActive='';
  urChildrenActive='';
  ScheduleActive='';
  EmergancyActive='';


  constructor() {
      this.navButtonSelected=0;
      this.dashActive=''; 
   }

   //dash button control

  Dashboard() 
  {
      this.navButtonSelected=0;
      console.log(`Dashboard selected`+this.navButtonSelected);

      this.dashActive='active';
      this.notificationActive=this.urHealthActive=this.massegeActive=this.urChildrenActive=this.ScheduleActive=this.EmergancyActive='';

  }
  

   //notification button control

  Notification() 
  {
      this.navButtonSelected=1;
      console.log(`Notification selected`+this.navButtonSelected);

      this.notificationActive='active';
      this.dashActive=this.urHealthActive=this.massegeActive=this.urChildrenActive=this.ScheduleActive=this.EmergancyActive='';

  }

   //your Health button control

  YourHealth() 
  {
      this.navButtonSelected=2;
      console.log(`Your Health selected`+this.navButtonSelected);

      this.urHealthActive='active';
      this.dashActive=this.notificationActive=this.massegeActive=this.urChildrenActive=this.ScheduleActive=this.EmergancyActive='';

  }

  //your Health button control

  Massege() 
  {
      this.navButtonSelected=3;
      console.log(`Message selected`+this.navButtonSelected);

      this.massegeActive='active';
      this.dashActive=this.notificationActive=this.urHealthActive=this.urChildrenActive=this.ScheduleActive=this.EmergancyActive='';

  }

  //your Children button control

  YourChildren() 
  {
      this.navButtonSelected=4;
      console.log(`Your Children selected`+this.navButtonSelected);

      this.urChildrenActive='active';
      this.dashActive=this.notificationActive=this.urHealthActive=this.massegeActive=this.ScheduleActive=this.EmergancyActive='';

  }
  
  //Schedule button control

  Schedule() 
  {
      this.navButtonSelected=5;
      console.log(`Schedule selected`+this.navButtonSelected);

      this.ScheduleActive='active';
      this.dashActive=this.notificationActive=this.urHealthActive=this.massegeActive=this.urChildrenActive=this.EmergancyActive='';

  }


  //Emergancy button control

  Emergancy() 
  {
      this.navButtonSelected=6;
      console.log(`Emergancy selected`+this.navButtonSelected);

      this.EmergancyActive='active';
      this.dashActive=this.notificationActive=this.urHealthActive=this.massegeActive=this.urChildrenActive=this.ScheduleActive='';

  }



  ngOnInit() {
  }

}
