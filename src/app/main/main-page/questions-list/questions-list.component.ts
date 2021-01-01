import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { QuestionService } from '../../../shared/services/question.service';
import { Router } from '@angular/router';
import {Filters, Question} from '../../../shared/interfaces/interfaces';
import { FiltersService } from '../../../shared/services/filters.service';
import { retry } from 'rxjs/operators';

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
    this.questionService.getQuetions().then((res) => {
      this.questionService.questions = res;
      console.log(res);
    });
  }
}
