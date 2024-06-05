import { Component } from '@angular/core';
import { DeptsService } from '../services/depts.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  depts!:Department[];

  constructor(private deptService:DeptsService){
    this.loadData();
  }

  loadData() {
    this.depts=this.deptService.getAll();
  }

  del = (id:number) => {
    this.deptService.deleteById(id);
    this.loadData();
  }

  add = (dept:Department) => {
    this.deptService.add(dept);
    this.loadData();
  }

  upd = (dept:Department) => {
    dept.editable=undefined;
    this.deptService.update(dept);
    this.loadData();
  }

  markEditable = (id:number) => {
    let index = this.depts.findIndex(d => d.id===id);
    this.depts[index].editable=true;
  }
  
  unMarkEditable = (id:number) => {
    let index = this.depts.findIndex(d => d.id===id);
    this.depts[index].editable=undefined;
  }


}
