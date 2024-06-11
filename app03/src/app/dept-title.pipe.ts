import { Pipe, PipeTransform } from '@angular/core';
import { DeptsService } from './services/depts.service';

@Pipe({
  name: 'deptTitle'
})
export class DeptTitlePipe implements PipeTransform {

  constructor(private deptService:DeptsService){

  }

  transform(deptId:number): string | undefined {
    let d = this.deptService.getById(deptId);
    return d?.title;
  }

}
