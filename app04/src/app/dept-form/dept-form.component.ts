import { Component, Input } from '@angular/core';
import { Department } from '../models/department';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent {

  @Input()
  dept!:Department;

  @Input()
  save!:(dept:Department) => void;

  @Input()
  cancelEdit!:(id:number) => void;

  deptTemp!:Department;

  constructor(){
    this.reset();
  }

  ngOnChanges(){
    if(this.dept.editable){
      this.deptTemp={...this.dept};
    }
  }

  reset(){
    this.dept={id:0,title:""};
  }

  formSubmitted(){
    this.save(this.dept);
    this.reset();
  }

  cancelBtnClicked(){
    if(this.dept.editable){
      this.save(this.deptTemp);
     }else{
      this.reset();
     }
  }
}
