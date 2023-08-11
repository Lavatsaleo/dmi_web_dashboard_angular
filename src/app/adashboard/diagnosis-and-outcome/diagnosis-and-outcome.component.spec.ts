import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAndOutcomeComponent } from './diagnosis-and-outcome.component';

describe('DiagnosisAndOutcomeComponent', () => {
  let component: DiagnosisAndOutcomeComponent;
  let fixture: ComponentFixture<DiagnosisAndOutcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisAndOutcomeComponent]
    });
    fixture = TestBed.createComponent(DiagnosisAndOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
