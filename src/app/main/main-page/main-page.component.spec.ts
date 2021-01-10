import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {AuthService} from '../../shared/services/auth.service';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  const AuthServiceStub = {
    user: {
      email: 'farmik222@yandex.ru'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ],
      providers: [{provide: AuthService, useValue: AuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
