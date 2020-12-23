import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: [ './plus-button.component.scss' ]
})
export class PlusButtonComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  redirectToNewQuestionPage(): void {
    this.router.navigate([ 'newquestion' ]);
  }
}
