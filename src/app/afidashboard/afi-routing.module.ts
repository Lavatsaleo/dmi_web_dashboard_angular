import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfidashboardComponent } from './afidashboard/afidashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { DiagnosisAndOutcomeComponent } from './diagnosis-and-outcome/diagnosis-and-outcome.component';
import { LaboratoryResultsComponent } from './laboratory-results/laboratory-results.component';
import { SyndromicCasesComponent } from './syndromic-cases/syndromic-cases.component';


const routes: Routes = [
    {
        path: 'afiDashboard', component: AfidashboardComponent,
        children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'diagnosis-and-outcome', component: DiagnosisAndOutcomeComponent },
            { path: 'syndromic-cases', component: SyndromicCasesComponent},
            { path: 'laboratory-results', component: LaboratoryResultsComponent}
        ]

    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AfiRoutingModule { }
