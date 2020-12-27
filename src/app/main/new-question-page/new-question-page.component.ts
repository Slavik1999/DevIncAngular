import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import {QuestionService} from '../../shared/services/question.service';
import {AuthService} from '../../shared/services/auth.service';
import {formatDate} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../shared/interfaces/interfaces';
import {categories} from '../../shared/constants/categories-constants';

@Component({
  selector: 'app-new-question-page',
  templateUrl: './new-question-page.component.html',
  styleUrls: ['./new-question-page.component.scss']
})
export class NewQuestionPageComponent implements OnInit {
  question: Question;
  categories: string[] = categories;
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  onChange(name: string, isChecked: boolean): void {
    const tags = (this.form.controls.tags as FormArray);

    if (isChecked) {
      tags.push(new FormControl(name));
    } else {
      const index = tags.controls.findIndex(x => x.value === name);
      tags.removeAt(index);
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('', Validators.required),
      text: this.fb.control('', Validators.required),
      tags: this.fb.array([])
    });
    if (this.activatedRoute.snapshot.params.id){
      this.questionService.getQuestion(this.activatedRoute.snapshot.params.id).then(res => {
        this.form = this.fb.group({
          title: this.fb.control(res.title, Validators.required),
          text: this.fb.control(res.text, Validators.required),
          tags: this.fb.array(res.tags)
        });
        this.question = res;
      });
    }
  }

  submit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id){
      this.updateQuestion(id);
    } else{
      this.createQuestion(id);
    }
  }
  createQuestion(id): void {
    const {title, text, tags} = this.form.value;
    const question: Question = {
      title,
      text,
      tags,
      onModeration: true,
      author: this.authService.user.email,
      isResolved: false,
      date: new Date(),
      comments: []
    };
    this.questionService.createQuestion(question).then(res => {
      this.router.navigate(['question/' + id]);
    }).catch(e => console.error(e));
  }
  updateQuestion(id): void{
    const {title, text, tags} = this.form.value;
    this.questionService.updateQuestion(id, {title, text, tags}).then(res => {
      this.router.navigate(['question/' + id]);
    }).catch(e => console.error(e));
  }
  isChecked(category): boolean{
    if (this.question) {
      return !!this.question.tags.find(tag => category === tag);
    } else{
      return false;
    }
  }
}

