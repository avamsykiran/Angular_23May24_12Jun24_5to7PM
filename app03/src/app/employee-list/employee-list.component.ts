import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmpsService } from '../services/emps.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emps:Employee[];

  constructor(private empService:EmpsService){
    this.emps = this.empService.getAll();
  }

  del(id:number){
    this.empService.deleteById(id);
    this.emps = this.empService.getAll();
  }
}
