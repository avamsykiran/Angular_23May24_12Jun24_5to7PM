import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  idFC:FormControl;
  fullNameFC:FormControl;
  dateOfJoingFC:FormControl;
  salaryFC:FormControl;
  mailIdFC:FormControl;
  deptIdFC:FormControl;

  empForm:FormGroup;

  constructor(){
    this.idFC = new FormControl(0);
    this.fullNameFC = new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(30)]);
    this.dateOfJoingFC = new FormControl((new Date()).toISOString().substring(10),[Validators.required]);
    this.salaryFC = new FormControl(0,[Validators.required,Validators.min(0),Validators.max(500000)]);
    this.mailIdFC = new FormControl("",[Validators.required,Validators.email]);
    this.deptIdFC = new FormControl(0,[Validators.required]);

    this.empForm = new FormGroup({
      id:this.idFC,fullName:this.fullNameFC,dateOfJoing:this.dateOfJoingFC,salary:this.salaryFC,mailId:this.mailIdFC,deptId:this.deptIdFC
    });
  }
}
