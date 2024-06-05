import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeptRowComponent } from './dept-row/dept-row.component';
import { DeptFormComponent } from './dept-form/dept-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DeptRowComponent,
    DeptFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
