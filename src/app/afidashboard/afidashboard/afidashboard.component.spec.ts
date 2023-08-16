import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfidashboardComponent } from './afidashboard.component';

describe('AfidashboardComponent', () => {
  let component: AfidashboardComponent;
  let fixture: ComponentFixture<AfidashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfidashboardComponent]
    });
    fixture = TestBed.createComponent(AfidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
