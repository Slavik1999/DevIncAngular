import { Injectable } from '@angular/core';
import { Filters } from '../interfaces/interfaces';
import { timeAll, sortNew } from '../constants/time-constants';
import { themeLight, displayTile, themeDark } from '../constants/display-constants';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filters: Filters = {
    resolved: '',
    categories: [],
    time: timeAll,
    onModeration: '',
    myQuestions: ''
  };
  sort = sortNew;
  theme = themeLight;
  display = displayTile;
  constructor() {}
  resetFilters(): void{
    this.filters = {
      resolved: '',
      categories: [],
      time: timeAll,
      onModeration: '',
      myQuestions: '',
    };
    this.sort = sortNew;
    this.theme = themeLight;
    this.display = displayTile;
  }
}
