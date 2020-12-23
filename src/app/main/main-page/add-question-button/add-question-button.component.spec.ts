import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionButtonComponent } from './add-question-button.component';

describe('AddQuestionButtonComponent', () => {
  let component: AddQuestionButtonComponent;
  let fixture: ComponentFixture<AddQuestionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
