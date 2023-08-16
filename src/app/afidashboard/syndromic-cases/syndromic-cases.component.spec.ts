import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndromicCasesComponent } from './syndromic-cases.component';

describe('SyndromicCasesComponent', () => {
  let component: SyndromicCasesComponent;
  let fixture: ComponentFixture<SyndromicCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyndromicCasesComponent]
    });
    fixture = TestBed.createComponent(SyndromicCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
