import {Pipe, PipeTransform} from '@angular/core';
import {Filters, Question} from '../interfaces/interfaces';
import {FiltersService} from '../services/filters.service';
import {timeAll, timeDay, timeWeek, timeMonth, msInDay, msInWeek, msInMonth} from '../constants/time-constants';
import {AuthService} from '../services/auth.service';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform{
  constructor(private filtersService: FiltersService, private authService: AuthService) {
  }

  transform(arr: Question[], filters: Filters): Question[] {
    const { resolved, categories, time, onModeration, myQuestions } = filters;
    return arr.filter((question) => {
      if (
        this.checkCategories(question.tags, categories) &&
        this.checkResolved(question.isResolved, resolved) &&
        this.checkDate(time, question.date) &&
        this.checkMyQuestions(question.uid, myQuestions) &&
        this.checkOnModeration(question.onModeration, onModeration)
      ) {
        return question;
      } else {
        return false;
      }
    });
  }
  checkCategories(questionTags, filterCategories): boolean {
    if (!filterCategories.length) {
      return true;
    } else {
      if (questionTags.length !== filterCategories.length) {
        return false;
      } else {
        return (
          questionTags.filter((questionTag) => {
            return filterCategories.indexOf(questionTag) >= 0;
          }).length === questionTags.length
        );
      }
    }
  }
  checkResolved(questionResolved, filterResolved): boolean {
    return filterResolved.length ? filterResolved.indexOf(questionResolved) >= 0 : true;
  }
  checkOnModeration(questionOnModeration, filterOnModeration): boolean {
    return filterOnModeration.length ? filterOnModeration.indexOf(questionOnModeration) >= 0 : true;
  }
  checkMyQuestions(questionUid, myQuestionFilter): boolean {
    if (!myQuestionFilter){
      return true;
    }
    if (myQuestionFilter === 'false'){
      return questionUid !== this.authService.user.uid;
    }
    if (myQuestionFilter === 'true'){
      return questionUid === this.authService.user.uid;
    }
  }
  checkDate(time, questionDate): boolean{
    const dateNow = new Date().getTime();
    if (time === timeAll){
      return true;
    }
    if (time === timeDay){
      return dateNow - questionDate <= msInDay;
    }
    if (time === timeWeek){
      return dateNow - questionDate <= msInWeek;
    }
    if (time === timeMonth){
      return dateNow - questionDate <= msInMonth;
    }
  }
}
