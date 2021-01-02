import { Component, OnInit } from '@angular/core';
import {categoriesNames} from '../../../shared/constants/categories-constants';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../shared/services/question.service';
import {AuthService} from '../../../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Filters} from '../../../shared/interfaces/interfaces';
import {FiltersService} from '../../../shared/services/filters.service';
import {displayTile, displayString, themeLight, themeDark} from '../../../shared/constants/display-constants';
import {timeAll, timeMonth, timeDay, timeWeek, sortNew, sortOld} from '../../../shared/constants/time-constants';

@Component({
  selector: 'app-titles-parameters',
  templateUrl: './titles-parameters.component.html',
  styleUrls: ['./titles-parameters.component.scss']
})
export class TitlesParametersComponent implements OnInit {
  categoriesNames: string[] = categoriesNames;
  display = {displayTile, displayString, themeLight, themeDark};
  time = {timeAll, timeMonth, timeDay, timeWeek, sortNew, sortOld};
  filtersForm: FormGroup;
  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              public authService: AuthService,
              public filtersService: FiltersService) { }
  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      resolved: this.fb.control([]),
      tags: this.fb.array([]),
      time: this.fb.control(''),
    });
  }

  onChangeCategory(name: string, isChecked: boolean): void {
    const {resolved, categories, time} =  this.filtersService.filters;
    if (isChecked) {
      this.filtersService.filters
        .categories.push(name);
    } else {
      this.filtersService.filters.categories = categories.filter(x => x !== name);
    }
  }
  onChangeResolved(resolved: string): void {
    this.filtersService.filters.resolved = resolved;
  }
  onChangeTime(time: string): void{
    this.filtersService.filters.time = time;
  }
  onChangeOnModeration(onModeration: string): void{
    this.filtersService.filters.onModeration = onModeration;
  }
  onChangeMyQuestions(myQuestions: string): void{
    this.filtersService.filters.myQuestions = myQuestions;
  }
  onChangeSort(sort: string): void{
    this.filtersService.sort = sort;
  }
  onChangeTheme(theme: string): void{
    this.filtersService.theme = theme;
  }
  onChangeDisplay(display: string): void{
    this.filtersService.display = display;
  }

}
