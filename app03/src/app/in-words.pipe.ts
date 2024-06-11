import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE",
      "FOUR","FIVE","SIX","SEVEN",
      "EIGHT","NINE"
    ];
  }

  transform(n:number): string {
    let result = "";

    let strN = String(n);

    for(let i=0;i<strN.length;i++){
      let ch = strN.charAt(i);
      if(ch==='.'){
        result += "point ";
      }else{
        let index = Number(ch);
        result += this.digits[index] + " ";
      }
    }

    return result;
  }

}
