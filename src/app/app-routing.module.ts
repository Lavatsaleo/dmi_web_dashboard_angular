import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from './sari-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'mDashboard/overview', pathMatch: 'full' },
  { path: 'mDashboard', redirectTo: 'mDashboard/overview', pathMatch: 'full' },
  { path: 'afiDashboard', redirectTo: 'afiDashboard/overview',pathMatch: 'full' },
  { path: 'saridashboard', redirectTo: 'saridashboard/overview', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
