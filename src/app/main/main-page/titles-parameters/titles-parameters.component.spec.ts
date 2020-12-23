import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesParametersComponent } from './titles-parameters.component';

describe('TitlesParametersComponent', () => {
  let component: TitlesParametersComponent;
  let fixture: ComponentFixture<TitlesParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesParametersComponent ]
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
