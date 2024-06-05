import { Component, Input } from '@angular/core';
import { Department } from '../models/department';

@Component({
  selector: 'app-dept-row',
  templateUrl: './dept-row.component.html',
  styleUrls: ['./dept-row.component.css']
})
export class DeptRowComponent {

  @Input()
  dept!:Department;

  @Input()
  del!: (id:number) => void;

  @Input()
  edit!: (id:number) => void;
}
