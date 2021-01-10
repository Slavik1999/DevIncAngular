import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../shared/services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('RegitsterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  const AuthServiceStub = {
    SignUp: () => {
      return new Promise((res, rej) => {
        res({});
        rej('Error');
      });
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      providers: [{provide: AuthService, useValue: AuthServiceStub}],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
