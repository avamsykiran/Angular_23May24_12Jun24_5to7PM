import { Pipe, PipeTransform } from '@angular/core';
import { DeptsService } from './services/depts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'deptTitle'
})
export class DeptTitlePipe implements PipeTransform {

  constructor(private deptService:DeptsService){

  }

  transform(deptId:number): Observable<string> {
    return this.deptService.getById(deptId).pipe( map(d => d.title) );
  }

}
