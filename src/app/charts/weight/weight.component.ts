import { Component, OnInit } from '@angular/core';
import { Message } from './Message';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent {



    data: any;
    
    msgs: Message[];

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [3, 5, 7, 8,12],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
               /* {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }*/
            ]
        }
    }

    selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }
}

