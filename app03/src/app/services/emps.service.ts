import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {

  private emps:Employee[];
  private nextEmpId:number;

  constructor() {
    this.emps = [
      {id:1,fullName:"Vamsy Kiran Aripaka",dateOfJoing:"2024-01-01",mailId:"vamsy@gmail.com",salary:90000,deptId:101},
      {id:2,fullName:"KGN Murthy",dateOfJoing:"2024-01-01",mailId:"murthy@gmail.com",salary:89000,deptId:101},
      {id:3,fullName:"Suresh P.",dateOfJoing:"2024-02-01",mailId:"suresh@gmail.com",salary:80000,deptId:102},
      {id:4,fullName:"Ravindra Boina",dateOfJoing:"2024-02-01",mailId:"ravi@gmail.com",salary:70000,deptId:102},
      {id:5,fullName:"Ramesh Pekala",dateOfJoing:"2024-05-01",mailId:"ramesh@gmail.com",salary:60000,deptId:102},
    ];

    this.nextEmpId= 6;
   }

   getAll():Employee[]{
    return [...this.emps];
  }

  getById(id:number):Employee | undefined {
    return this.emps.find(e => e.id===id);
  }

  add(emp:Employee){
    emp.id=this.nextEmpId++;
    this.emps.push(emp);
  }

  update(emp:Employee): Employee | undefined{
    let index = this.emps.findIndex(e => e.id===emp.id);
    if(index>-1){
      this.emps[index]=emp;
      return emp;
    }else{
      return undefined;
    }
  }

  deleteById(id:number):void {
    let index = this.emps.findIndex(e => e.id===id);
    if(index>-1){
      this.emps.splice(index,1);
    }
  }
}
