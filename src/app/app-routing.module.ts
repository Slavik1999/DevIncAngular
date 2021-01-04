import { NewQuestionPageComponent } from './main/new-question-page/new-question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisationPageComponent } from './authorisation/authorisation-page/authorisation-page.component';
import { RegisterPageComponent } from './authorisation/regitster-page/register-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import {QuestionPageComponent} from './main/question-page/question-page.component';
import {ProfilePageComponent} from './main/profile-page/profile-page.component';

const routes: Routes = [
  { path: 'login', component: AuthorisationPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'newquestion',
    component: NewQuestionPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'newquestion/:id',
    component: NewQuestionPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'question/:id',
    component: QuestionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
