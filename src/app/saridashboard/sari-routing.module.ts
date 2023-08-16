import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaridashboardComponent } from './saridashboard/saridashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { EnrolmentComponent } from './enrolment/enrolment.component';
// import { AfidashboardComponent } from './afidashboard/afidashboard.component';
// import { OverviewComponent } from './overview/overview.component';
// import { DiagnosisAndOutcomeComponent } from './diagnosis-and-outcome/diagnosis-and-outcome.component';
// import { LaboratoryResultsComponent } from './laboratory-results/laboratory-results.component';
// import { SyndromicCasesComponent } from './syndromic-cases/syndromic-cases.component';


const routes: Routes = [
    {
        path: 'saridashboard', component: SaridashboardComponent,
        children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'enrolment', component: EnrolmentComponent},
        ],

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SariRoutingModule { }
