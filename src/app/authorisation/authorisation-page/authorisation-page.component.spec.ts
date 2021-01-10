import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationPageComponent } from './authorisation-page.component';
import {AuthService} from '../../shared/services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthorisationPageComponent', () => {
  let component: AuthorisationPageComponent;
  let fixture: ComponentFixture<AuthorisationPageComponent>;
  const AuthServiceStub = {
    SignIn: () => {
      return new Promise((res, rej) => {
        res({});
        rej('Error');
      });
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorisationPageComponent ],
      providers: [{provide: AuthService, useValue: AuthServiceStub}],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
