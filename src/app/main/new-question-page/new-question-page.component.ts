import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import {QuestionService} from '../../shared/services/question.service';
import {AuthService} from '../../shared/services/auth.service';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';
import {Question} from '../../shared/interfaces/interfaces';
import {categories} from '../../shared/constants/categories-constants';

@Component({
  selector: 'app-new-question-page',
  templateUrl: './new-question-page.component.html',
  styleUrls: ['./new-question-page.component.scss']
})
export class NewQuestionPageComponent implements OnInit {
  categories: string[] = categories;
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private authService: AuthService,
              private router: Router) { }

  onChange(name: string, isChecked: boolean): void {
    const tags = (this.form.controls.tags as FormArray);

    if (isChecked) {
      tags.push(new FormControl(name));
    } else {
      const index = tags.controls.findIndex(x => x.value === name);
      tags.removeAt(index);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control('', Validators.required),
      text: this.fb.control('', Validators.required),
      tags: this.fb.array([])
    });
  }

  submit(): void {
    const {title, text, tags} = this.form.value;
    const question: Question = {
      title,
      text,
      tags,
      onModeration: true,
      user: this.authService.user.email,
      isResolved: false,
      date: new Date()
    };
    this.questionService.createQuestion(question).then(res => {
      this.router.navigate(['']);
    }).catch(e => console.error(e));
  }
}

