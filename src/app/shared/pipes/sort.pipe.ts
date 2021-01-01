import {Pipe, PipeTransform} from '@angular/core';
import {Question} from '../interfaces/interfaces';
import {sortOld, sortNew} from '../constants/time-constants';


@Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform{
  constructor() {
  }
  transform(arr: Question[], sort: string): any {
    if (sort === sortNew){
      return arr.sort((a, b) => b.date - a.date);
    }
    if (sort === sortOld){
      return arr.sort((a, b) => a.date - b.date);
    }
  }
}
