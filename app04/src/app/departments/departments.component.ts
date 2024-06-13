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
  errMsg!:string;

  constructor(private deptService:DeptsService){
  
  }

  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.deptService.getAll().subscribe({
      next: data => this.depts=data,
      error: err => { console.error(err); this.errMsg="Sorry! Unable to load data! Please try again later!"}
    });
  }

  del = (id:number) => {
    this.deptService.deleteById(id).subscribe({
      next: () => this.loadData(),
      error: err => { console.error(err); this.errMsg="Sorry! Unable to delete! Please try again later!"}
    })
  }

  add = (dept:Department) => {
    this.deptService.add(dept).subscribe({
      next: dept => this.loadData(),
      error: err => { console.error(err); this.errMsg="Sorry! Unable to save! Please try again later!"}
    })
  }

  upd = (dept:Department) => {
    dept.editable=undefined;
    this.deptService.update(dept).subscribe({
      next: dept => this.loadData(),
      error: err => { console.error(err); this.errMsg="Sorry! Unable to save! Please try again later!"}
    })
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
