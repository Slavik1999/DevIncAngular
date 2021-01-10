import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesParametersComponent } from './titles-parameters.component';
import {AuthService} from '../../../shared/services/auth.service';
import firebase from 'firebase';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TitlesParametersComponent', () => {
  let component: TitlesParametersComponent;
  let fixture: ComponentFixture<TitlesParametersComponent>;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru'
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesParametersComponent ],
      providers: [{provide: AuthService, useValue: AuthServiceStub}],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
