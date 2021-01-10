import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionPageComponent } from './new-question-page.component';
import {AuthService} from '../../shared/services/auth.service';
import {QuestionService} from '../../shared/services/question.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('NewQuestionPageComponent', () => {
  let component: NewQuestionPageComponent;
  let fixture: ComponentFixture<NewQuestionPageComponent>;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru'
    }
  };
  const QuestionServiceStub = {
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
      declarations: [ NewQuestionPageComponent ],
      providers: [
        {provide: AuthService, useValue: AuthServiceStub},
        {provide: QuestionService, useValue: QuestionServiceStub}
        ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
