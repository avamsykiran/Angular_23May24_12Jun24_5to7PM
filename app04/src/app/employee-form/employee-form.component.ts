import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpsService } from '../services/emps.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  idFC: FormControl;
  fullNameFC: FormControl;
  dateOfJoingFC: FormControl;
  salaryFC: FormControl;
  mailIdFC: FormControl;
  deptIdFC: FormControl;

  empForm: FormGroup;

  depts!: Department[];

  isEditing!:boolean;

  errMsg!:string;

  constructor(
      private empService: EmpsService, 
      private deptService: DeptsService, 
      private router: Router,
      private activatedRoute:ActivatedRoute
    ) {
    this.idFC = new FormControl(0);
    this.fullNameFC = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]);
    this.dateOfJoingFC = new FormControl((new Date()).toISOString().substring(0, 10), [Validators.required]);
    this.salaryFC = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(500000)]);
    this.mailIdFC = new FormControl("", [Validators.required, Validators.email]);
    this.deptIdFC = new FormControl("", [Validators.required]);

    this.empForm = new FormGroup({
      id: this.idFC, fullName: this.fullNameFC, dateOfJoing: this.dateOfJoingFC,
      salary: this.salaryFC, mailId: this.mailIdFC, deptId: this.deptIdFC
    });
  }

  ngOnInit(){
    
    this.deptService.getAll().subscribe({
      next: data => this.depts = data,
      error: err => { console.error(err); this.errMsg="Unable to load depts information!"}
    })

    let eid = this.activatedRoute.snapshot.params['id'];
    if(eid){
      this.empService.getById(Number(eid)).subscribe({
        next: data => { this.empForm.reset(data); this.isEditing=true;},
        error: err => { console.error(err); this.errMsg="Unable to load employee information!"}
      })
    }else{
      this.isEditing=false;
    }
  }

  formSubmitted() {
    let emp = { ...this.empForm.value, deptId: Number(this.empForm.value.deptId), salary: Number(this.empForm.value.salary) };

    let ob = null;

    if(this.isEditing){
      ob = this.empService.update(emp);
    }else{
      ob = this.empService.add(emp);
    }
    
    ob.subscribe({
      next: emp => this.router.navigate(['/emps', 'list']),
      error: err => { console.error(err); this.errMsg="Unable to save employee information!"}
    })
    
  }
}
