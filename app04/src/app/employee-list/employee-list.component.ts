import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmpsService } from '../services/emps.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emps!:Employee[];
  errMsg!:string

  constructor(private empService:EmpsService){
    
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.empService.getAll().subscribe({
      next: data => this.emps=data , 
      error: err => { console.error(err); this.errMsg="Unable to fetech data now! Please try again later!"; }
    })
  }

  del(id:number){
    this.empService.deleteById(id).subscribe({
      next: () => this.loadData(),
      error: err => { console.error(err); this.errMsg="Unable to delete! Please try again later!"; }
    })
  }
}
