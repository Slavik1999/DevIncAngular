import { NewQuestionPageComponent } from './main/new-question-page/new-question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisationPageComponent } from './authorisation/authorisation-page/authorisation-page.component';
import { RegisterPageComponent } from './authorisation/regitster-page/register-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthorizedGuard } from './shared/guards/authorized.guard';
import {QuestionPageComponent} from './main/question-page/question-page.component';
import {ProfilePageComponent} from './main/profile-page/profile-page.component';
import {UnauthorizedGuard} from './shared/guards/unauthorized.guard';

const routes: Routes = [
  { path: 'login',
    component: AuthorisationPageComponent,
    canActivate: [ UnauthorizedGuard ]
  },
  { path: 'register',
    component: RegisterPageComponent,
    canActivate: [ UnauthorizedGuard ]
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [ AuthorizedGuard ]
  },
  {
    path: 'newquestion',
    component: NewQuestionPageComponent,
    canActivate: [ AuthorizedGuard ]
  },
  {
    path: 'newquestion/:id',
    component: NewQuestionPageComponent,
    canActivate: [ AuthorizedGuard ]
  },
  {
    path: 'question/:id',
    component: QuestionPageComponent,
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthorizedGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
