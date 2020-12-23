import { NewQuestionPageComponent } from './main/new-question-page/new-question-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisationPageComponent } from './authorisation/authorisation-page/authorisation-page.component';
import { RegisterPageComponent } from './authorisation/regitster-page/register-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
