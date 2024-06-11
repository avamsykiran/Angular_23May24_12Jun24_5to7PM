import { Directive, ElementRef, HostListener, Input } from '@angular/core';

interface ColorSet {
  fg:string;
  bg:string;
}

@Directive({
  selector: '[appToggleColor]'
})
export class ToggleColorDirective {

  @Input()
  appToggleColor!:string | ColorSet;

  orgBGColor:string;
  orgFGColor:string;

  effectBGColor:string;
  effectFGColor:string;

  constructor(private ele:ElementRef) { 

    this.orgBGColor=ele.nativeElement.style.backgroundColor;
    this.orgFGColor=ele.nativeElement.style.color;

    this.effectBGColor="#000000";
    this.effectFGColor="#ffffff";
  }

  ngOnChanges(){
    if(this.appToggleColor){
      if(typeof this.appToggleColor==='string'){
        this.effectBGColor=this.appToggleColor;
      }else{
        this.effectBGColor=this.appToggleColor.bg;
        this.effectFGColor=this.appToggleColor.fg;
      }
    }
  }

  @HostListener("mouseover")
  applyEffectColors(){
    this.ele.nativeElement.style.backgroundColor=this.effectBGColor;
    this.ele.nativeElement.style.color=this.effectFGColor;
  }  
  
  @HostListener("mouseleave")
  applyOriginalColors(){
    this.ele.nativeElement.style.backgroundColor=this.orgBGColor;
    this.ele.nativeElement.style.color=this.orgFGColor;
  }
}
