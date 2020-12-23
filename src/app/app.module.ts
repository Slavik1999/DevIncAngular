import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './authorisation/regitster-page/register-page.component';
import { AuthorisationPageComponent } from './authorisation/authorisation-page/authorisation-page.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './shared/guards/auth.guard';

import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitlesParametersComponent } from './main/main-page/titles-parameters/titles-parameters.component';
import { QuestionsListComponent } from './main/main-page/questions-list/questions-list.component';
import { AddQuestionButtonComponent } from './main/main-page/add-question-button/add-question-button.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PlusButtonComponent } from './main/main-page/plus-button/plus-button.component';
import { NewQuestionPageComponent } from './main/new-question-page/new-question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    AuthorisationPageComponent,
    NavBarComponent,
    MainPageComponent,
    TitlesParametersComponent,
    QuestionsListComponent,
    AddQuestionButtonComponent,
    FooterComponent,
    PlusButtonComponent,
    NewQuestionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
