import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryResultsComponent } from './laboratory-results.component';

describe('LaboratoryResultsComponent', () => {
  let component: LaboratoryResultsComponent;
  let fixture: ComponentFixture<LaboratoryResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratoryResultsComponent]
    });
    fixture = TestBed.createComponent(LaboratoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
