import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  num:number;
  str:string;
  dt:Date;

  constructor(){
    this.num=123.456;
    this.str="Hello! how are you all";
    this.dt=new Date("1947-08-15 14:30:00");
  }
}
