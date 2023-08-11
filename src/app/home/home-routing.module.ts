import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdashboardComponent } from '../adashboard/adashboard.component';
import { MdashboardComponent } from '../mdashboard/mdashboard.component';
import { SdashboardComponent } from '../sdashboard/sdashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'MortalityDashboard', component:MdashboardComponent},
  {path: 'AFIDashboard', component:AdashboardComponent},
  {path: 'SARI/ILIDashboard',component:SdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
