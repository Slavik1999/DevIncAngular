import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import {AuthService} from '../../shared/services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      providers: [{provide: AuthService, useValue: AuthServiceStub}],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
