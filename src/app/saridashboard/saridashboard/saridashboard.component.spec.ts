import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaridashboardComponent } from './saridashboard.component';

describe('SaridashboardComponent', () => {
  let component: SaridashboardComponent;
  let fixture: ComponentFixture<SaridashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaridashboardComponent]
    });
    fixture = TestBed.createComponent(SaridashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
