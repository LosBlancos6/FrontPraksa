import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    DataComponent,
    ReportsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
