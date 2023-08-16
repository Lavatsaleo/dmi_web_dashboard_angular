import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { MdashboardModule } from './mdashboard/mdashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { SariDashboardModule } from './sari-dashboard/sari-dashboard.module';
import { AfidashboardModule } from './afidashboard/afidashboard.module';
//import { SaridashboardComponent } from './saridashboard/saridashboard.component';
import { SaridashboardModule } from './saridashboard/saridashboard.module';



@NgModule({
  declarations: [	
    AppComponent,
    PageNotFoundComponent,
    //SaridashboardComponent
   ],
  imports: [
    BrowserModule,
    AfidashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HighchartsChartModule,
    MdashboardModule,
    NgbModule,
    SaridashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
