import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../shared/services/question.service';
import {Question, User, Comment} from '../../shared/interfaces/interfaces';
import {AuthService} from '../../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {profileImg} from '../../shared/constants/profileImg';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  profileImg: string = profileImg;
  question: Question;
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, public questionService: QuestionService, public authService: AuthService,
              public router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: this.fb.control('', Validators.required)
    });
    this.questionService.getQuestion(this.activatedRoute.snapshot.params.id).then(res => {
      this.question = res;
    });
  }

  submit(): void{
    const newComment: Comment = {
      date: new Date(),
      isResolve: false,
      author: this.authService.user.email,
      text: this.form.value.text
    };
    this.question.comments.push(newComment);
    this.questionService.updateQuestion(this.activatedRoute.snapshot.params.id, {comments: this.question.comments})
    .then(res => {
       this.form.reset();
    });
  }

  onChange(name: string, isChecked: boolean, checkedCommentDate: Date): void{
    this.changeCommentResolve(isChecked, checkedCommentDate);
    this.changeQuestionResolve();
    this.questionService
      .updateQuestion(this.activatedRoute.snapshot.params.id, {isResolved: this.question.isResolved, comments: this.question.comments});
  }
  changeCommentResolve(isChecked, checkedCommentDate): void{
    this.question.comments.forEach(comment => {
      if (comment.date === checkedCommentDate){
        comment.isResolve = isChecked;
      }
    });
  }
  changeQuestionResolve(): void{
    const resolveComment = this.question.comments.find(comment => comment.isResolve === true);
    this.question.isResolved = !!resolveComment;
  }
}
