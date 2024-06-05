import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DeptsService {

  private depts: Department[];
  private nextDeptId: number;

  constructor() {
    this.depts=[
      {id:101,title:'Operations'},
      {id:102,title:'HR'},
      {id:103,title:'Accounts'}
    ];

    this.nextDeptId=104;
  }

  getAll():Department[]{
    return [...this.depts];
  }

  getById(id:number):Department | undefined {
    return this.depts.find(d => d.id===id);
  }

  add(dept:Department){
    dept.id=this.nextDeptId++;
    this.depts.push(dept);
  }

  update(dept:Department): Department | undefined{
    let index = this.depts.findIndex(d => d.id===dept.id);
    if(index>-1){
      this.depts[index]=dept;
      return dept;
    }else{
      return undefined;
    }
  }

  deleteById(id:number):void {
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts.splice(index,1);
    }
  }
}
