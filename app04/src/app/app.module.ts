import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeptRowComponent } from './dept-row/dept-row.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ToggleColorDirective } from './toggle-color.directive';
import { HomeComponent } from './home/home.component';
import { DeptTitlePipe } from './dept-title.pipe';
import { InWordsPipe } from './in-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DeptRowComponent,
    DeptFormComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    ToggleColorDirective,
    HomeComponent,
    DeptTitlePipe,
    InWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
