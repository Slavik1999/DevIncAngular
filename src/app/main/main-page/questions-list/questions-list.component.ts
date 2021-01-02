import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { QuestionService } from '../../../shared/services/question.service';
import { Router } from '@angular/router';
import {Filters, Question} from '../../../shared/interfaces/interfaces';
import { FiltersService } from '../../../shared/services/filters.service';
import { retry } from 'rxjs/operators';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: [ './questions-list.component.scss' ]
})
export class QuestionsListComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public questionService: QuestionService,
    public router: Router,
    public filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.updateQuestions();
  }
  approveQuestion(id): void{
    this.questionService.updateQuestion(id, {onModeration: false}).then(deleted => {
      this.updateQuestions();
    }).catch(e => console.error(e));
  }
  showComponent(question): boolean{
    if (question.onModeration){
      return this.authService.admin || question.author === this.authService.user.email;
    } else{
      return true;
    }
  }
  deleteQuestion(id): any{
    this.questionService.deleteQuestion(id).then(deleted => {
      this.updateQuestions();
    }).catch(e => console.error(e));
  }
  updateQuestions(): void{
    this.questionService.getQuetions().then(questions => {
      this.questionService.questions = questions;
    });
  }
}
