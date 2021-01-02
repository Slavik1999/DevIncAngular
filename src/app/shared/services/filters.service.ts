import {Injectable} from '@angular/core';
import {Filters} from '../interfaces/interfaces';
import {BehaviorSubject} from 'rxjs';
import {timeAll, sortNew} from '../constants/time-constants';
import {themeLight, displayTile} from '../constants/display-constants';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  filters: Filters = {
    resolved: '',
    categories: [],
    time: timeAll,
    onModeration: '',
    myQuestions: '',
  };
  sort = sortNew;
  theme = themeLight;
  display = displayTile;
  constructor() {
  }
}
