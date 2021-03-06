import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { AuthorizedGuard } from './shared/guards/authorized.guard';
import { UnauthorizedGuard } from './shared/guards/unauthorized.guard';


import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { TitlesParametersComponent } from './main/main-page/titles-parameters/titles-parameters.component';
import { QuestionsListComponent } from './main/main-page/questions-list/questions-list.component';
import { AddQuestionButtonComponent } from './main/main-page/add-question-button/add-question-button.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PlusButtonComponent } from './main/main-page/plus-button/plus-button.component';
import { NewQuestionPageComponent } from './main/new-question-page/new-question-page.component';
import { QuestionPageComponent } from './main/question-page/question-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ProfilePageComponent } from './main/profile-page/profile-page.component';
import {QuestionService} from './shared/services/question.service';
import {FiltersService} from './shared/services/filters.service';

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
    QuestionPageComponent,
    FilterPipe,
    SortPipe,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthorizedGuard, UnauthorizedGuard, AuthService, QuestionService, FiltersService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
