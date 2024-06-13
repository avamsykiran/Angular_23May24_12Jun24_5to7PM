import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {

  private empsApi:string;

  constructor(private httpClient:HttpClient) {
    this.empsApi="http://localhost:9999/emps";
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.empsApi);
  }

  getById(id:number):Observable<Employee> {
    return this.httpClient.get<Employee>(this.empsApi + "/" + id);
  }

  add(emp:Employee):Observable<Employee> {
    return this.httpClient.post<Employee>(this.empsApi,emp);
  }

  update(emp:Employee):Observable<Employee> {
    return this.httpClient.put<Employee>(this.empsApi + "/" + emp.id,emp);
  }

  deleteById(id:number):Observable<void> {
    return this.httpClient.delete<void>(this.empsApi + "/" + id);
  }
}
