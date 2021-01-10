import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListComponent } from './questions-list.component';
import {AuthService} from '../../../shared/services/auth.service';
import {QuestionService} from '../../../shared/services/question.service';
import {RouterTestingModule} from '@angular/router/testing';
import {SortPipe} from '../../../shared/pipes/sort.pipe';
import {FilterPipe} from '../../../shared/pipes/filter.pipe';
import {Question} from '../../../shared/interfaces/interfaces';

describe('QuestionsListComponent', () => {
  let component: QuestionsListComponent;
  let fixture: ComponentFixture<QuestionsListComponent>;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru'
    }
  };
  const QuestionServiceStub = {
    questions: [],
    getQuetions: () => {
      return new Promise((res, rej) => {
        res([{}]);
        rej('Error');
      });
    },
    getQuestion: () => {
      return new Promise((res, rej) => {
        res({});
        rej('Error');
      });
    },
    updateQuestion: () => {
      return new Promise((res, rej) => {
        res({});
        rej('Error');
      });
    },
    deleteQuestion: () => {
      return new Promise((res, rej) => {
        res({});
        rej('Error');
      });
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsListComponent, SortPipe, FilterPipe ],
      providers: [
        {provide: AuthService, useValue: AuthServiceStub},
        {provide: QuestionService, useValue: QuestionServiceStub},
        SortPipe,
        FilterPipe
        ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
