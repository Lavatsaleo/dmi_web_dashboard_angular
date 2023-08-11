import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdashboardRoutingModule } from './sdashboard-routing.module';
import { EnrolmentComponent } from './enrolment/enrolment.component';


@NgModule({
  declarations: [
    EnrolmentComponent
  ],
  imports: [
    CommonModule,
    SdashboardRoutingModule
  ]
})
export class SdashboardModule { }
