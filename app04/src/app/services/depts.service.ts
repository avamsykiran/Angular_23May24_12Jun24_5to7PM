import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptsService {

  private deptsApi:string;

  constructor(private httpClient:HttpClient) {
    this.deptsApi="http://localhost:9999/depts";
  }

  getAll(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.deptsApi);
  }

  getById(id:number):Observable<Department> {
    return this.httpClient.get<Department>(this.deptsApi + "/" + id);
  }

  add(dept:Department):Observable<Department> {
    return this.httpClient.post<Department>(this.deptsApi,dept);
  }

  update(dept:Department):Observable<Department> {
    return this.httpClient.put<Department>(this.deptsApi + "/" + dept.id,dept);
  }

  deleteById(id:number):Observable<void> {
    return this.httpClient.delete<void>(this.deptsApi + "/" + id);
  }
}
