import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  
  logos:string[];
  logoIndex:number;

  imgWidth:number;

  decorator:any;

  constructor(){
    this.userName = "SomeBody";
  
    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.jpg",
      "assets/imgs/w3.png"
    ];

    this.logoIndex=0;

    this.imgWidth=300;

    this.decorator={centered:true,bordered:true};
  }

  shift(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
