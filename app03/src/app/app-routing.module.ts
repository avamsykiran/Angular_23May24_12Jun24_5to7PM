import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/depts' },
  { path: 'depts', component: DepartmentsComponent },
  {
    path: 'emps', component: EmployeesComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: EmployeeListComponent },
      { path: 'add', component: EmployeeFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
