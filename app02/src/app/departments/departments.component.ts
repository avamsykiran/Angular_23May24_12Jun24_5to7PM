import { Component } from '@angular/core';
import { DeptsService } from '../services/depts.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  depts:Department[];

  constructor(private deptService:DeptsService){
    this.depts=this.deptService.getAll();
  }


}
