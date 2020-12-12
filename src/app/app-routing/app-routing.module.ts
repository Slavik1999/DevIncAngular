import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorisationPageComponent} from '../authorisation-page/authorisation-page.component';
import {RegisterPageComponent} from '../regitster-page/register-page.component';
import {MainPageComponent} from '../main-page/main-page.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: AuthorisationPageComponent},
  { path: 'register', component:  RegisterPageComponent},
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
