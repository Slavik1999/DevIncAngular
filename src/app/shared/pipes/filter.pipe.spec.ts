import {FilterPipe} from './filter.pipe';
import {TestBed} from '@angular/core/testing';
import {AuthService} from '../services/auth.service';
import {FiltersService} from '../services/filters.service';
import {Filters} from '../interfaces/interfaces';
import {msInDay, msInMonth, msInWeek, sortNew, timeAll, timeDay, timeMonth, timeWeek} from '../constants/time-constants';
import {displayTile, themeLight} from '../constants/display-constants';

describe('FilterPipe', () => {
  let filter: FilterPipe;
  let filtersService: FiltersService;
  let authService: AuthService;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru',
      uid: 'uid'
    }
  };
  const FiltersServiceStub = {
    filters: {
      resolved: '',
      categories: [],
      time: timeAll,
      onModeration: '',
      myQuestions: ''
    },
    sort: sortNew,
    theme: themeLight,
    display: displayTile,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPipe],
      providers: [
        {provide: AuthService, useValue: AuthServiceStub},
        {provide: FiltersService, useValue: FiltersServiceStub},
        FilterPipe
      ],
    });
  });
  beforeEach(() => {
    filtersService = TestBed.inject(FiltersService);
    authService = TestBed.inject(AuthService);
    filter = new FilterPipe(filtersService, authService);
  });

  it('checkResolved should return true on empty resolved and true question resolved', () => {
    expect(filter.checkResolved(true, '')).toBeTrue();
  });

  it('checkResolved should return true on true resolved and true question resolved', () => {
    expect(filter.checkResolved(true, 'true')).toBeTrue();
  });

  it('checkResolved should return false on false resolved and true question resolved', () => {
    expect(filter.checkResolved(true, 'false')).toBeFalse();
  });

  it('checkResolved should return true on empty filter resolved and false question resolved', () => {
    expect(filter.checkResolved(false, '')).toBeTrue();
  });

  it('checkResolved should return true on true resolved and false question resolved', () => {
    expect(filter.checkResolved(false, 'true')).toBeFalse();
  });

  it('checkResolved should return false on false resolved and false question resolved', () => {
    expect(filter.checkResolved(false, 'false')).toBeTrue();
  });




  it('checkOnModeration should return true on empty onModeration and true question onModeration', () => {
    expect(filter.checkOnModeration(true, '')).toBeTrue();
  });

  it('checkOnModeration should return true on true onModeration and true question onModeration', () => {
    expect(filter.checkOnModeration(true, 'true')).toBeTrue();
  });

  it('checkOnModeration should return false on false onModeration and true question onModeration', () => {
    expect(filter.checkOnModeration(true, 'false')).toBeFalse();
  });

  it('checkOnModeration should return true on empty filter onModeration and false question onModeration', () => {
    expect(filter.checkOnModeration(false, '')).toBeTrue();
  });

  it('checkOnModeration should return true on true onModeration and false question onModeration', () => {
    expect(filter.checkOnModeration(false, 'true')).toBeFalse();
  });

  it('checkOnModeration should return false on false onModeration and false question onModeration', () => {
    expect(filter.checkOnModeration(false, 'false')).toBeTrue();
  });



  it('checkCategories should return true on zero length of filter categories', () => {
    expect(filter.checkCategories(['JAVA'], [])).toBeTrue();
  });

  it('checkCategories should return false if there is length of filter categories and' +
    'and length of filter categories not equal to length of question categories', () => {
    expect(filter.checkCategories(['JAVA'], ['JAVA', 'JS'])).toBeFalse();
  });

  it('checkCategories should return true if question categories equal to filter categories', () => {
    expect(filter.checkCategories(['JAVA', 'JS'], ['JAVA', 'JS'])).toBeTrue();
  });

  it('checkCategories should return false if question categories not equal to filter categories', () => {
    expect(filter.checkCategories(['JAVA', 'JS'], ['JAVA', '.NET'])).toBeFalse();
  });



  it('checkMyQuestions should return true on empty question filter', () => {
    expect(filter.checkMyQuestions('uid', '')).toBeTrue();
  });

  it('checkMyQuestions should return false on false question filter and equals uid\'s', () => {
    expect(filter.checkMyQuestions('uid', 'false')).toBeFalse();
  });

  it('checkMyQuestions should return true on false question filter and not equals uid\'s', () => {
    expect(filter.checkMyQuestions('not', 'false')).toBeTrue();
  });

  it('checkMyQuestions should return true on true question filter and equals uid\'s', () => {
    expect(filter.checkMyQuestions('uid', 'true')).toBeTrue();
  });

  it('checkMyQuestions should return false on true question filter and not equals uid\'s', () => {
    expect(filter.checkMyQuestions('not', 'true')).toBeFalse();
  });




  it('checkDate should return true on time equal to timeAll', () => {
    expect(filter.checkDate(timeAll, 1)).toBeTrue();
  });

  it('checkDate should return true on time equal to timeDay and question date - dateNow less then msInDay', () => {
    expect(filter.checkDate(timeDay,  new Date().getTime() - msInDay / 2)).toBeTrue();
  });

  it('checkDate should return false on time equal to timeDay and question date - dateNow greater then msInDay', () => {
    expect(filter.checkDate(timeDay,  new Date().getTime() - msInWeek / 2)).toBeFalse();
  });

  it('checkDate should return false on time equal to timeWeek and question date - dateNow less then msInWeek', () => {
    expect(filter.checkDate(timeWeek,  new Date().getTime() - msInWeek / 2)).toBeTrue();
  });

  it('checkDate should return false on time equal to timeWeek and question date - dateNow greater then msInWeek', () => {
    expect(filter.checkDate(timeWeek,  new Date().getTime() - msInMonth / 2)).toBeFalse();
  });

  it('checkDate should return false on time equal to timeWeek and question date - dateNow less then msInMonth', () => {
    expect(filter.checkDate(timeMonth,  new Date().getTime() - msInMonth / 2)).toBeTrue();
  });

  it('checkDate should return false on time equal to timeWeek and question date - dateNow greater then msInMonth', () => {
    expect(filter.checkDate(timeMonth,  new Date().getTime() - msInMonth * 2)).toBeFalse();
  });
});
