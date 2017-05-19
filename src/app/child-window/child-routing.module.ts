import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildWindowComponent } from './child-window.component';
import { ImmunizationTableComponent } from '../child-window/immunization-table/immunization-table.component';
import { HeightComponent } from '../charts/height/height.component';
import { WeightComponent } from '../charts/weight/weight.component';


const childRoute: Routes = [
  {
    path: 'child',
    component: ChildWindowComponent,
    children: [   
          {
            path: 'immu',
            component: ImmunizationTableComponent
          },
           {
            path: 'weight',
            component: WeightComponent
          },
        ]
      }
    
  
];


@NgModule({
  imports: [
    RouterModule.forChild(childRoute)
  ],
   exports: [
    RouterModule
  ]
})


export class ChildRoutingModule { }
