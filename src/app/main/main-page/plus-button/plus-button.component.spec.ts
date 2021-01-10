import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusButtonComponent } from './plus-button.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PlusButtonComponent', () => {
  let component: PlusButtonComponent;
  let fixture: ComponentFixture<PlusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusButtonComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
