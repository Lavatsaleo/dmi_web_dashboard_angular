import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfidashboardComponent } from './afidashboard/afidashboard.component';
import { AfiRoutingModule } from './afi-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { SyndromicCasesComponent } from './syndromic-cases/syndromic-cases.component';
import { LaboratoryResultsComponent } from './laboratory-results/laboratory-results.component';
import { DiagnosisAndOutcomeComponent } from './diagnosis-and-outcome/diagnosis-and-outcome.component';



@NgModule({
  declarations: [
    AfidashboardComponent,
    OverviewComponent,
    SyndromicCasesComponent,
    LaboratoryResultsComponent,
    DiagnosisAndOutcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  
  ],
  exports: [
    AfiRoutingModule
  ]
})
export class AfidashboardModule { }
