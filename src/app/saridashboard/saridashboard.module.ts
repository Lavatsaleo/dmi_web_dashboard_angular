import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaridashboardComponent } from './saridashboard/saridashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { EnrolmentComponent } from './enrolment/enrolment.component';
import { RouterModule } from '@angular/router';
import { SariRoutingModule } from './sari-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    SaridashboardComponent,
    OverviewComponent,
    EnrolmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SariRoutingModule,
    HighchartsChartModule
  ],
  exports: [
    SariRoutingModule

  ]
})
export class SaridashboardModule { }
