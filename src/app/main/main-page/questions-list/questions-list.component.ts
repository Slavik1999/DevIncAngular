import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { QuestionService } from '../../../shared/services/question.service';
import {Router} from '@angular/router';

interface Question {
  [index: number]: {
    title: string;
    date: string;
    categories: string[];
  };
}

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: [ './questions-list.component.scss' ]
})
export class QuestionsListComponent implements OnInit {
  constructor(private authService: AuthService, public questionService: QuestionService, public router: Router) {}

  ngOnInit(): void {
    this.questionService.getQuetions().then(res => console.log(res));
  }
}
