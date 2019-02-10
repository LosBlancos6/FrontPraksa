import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    MapComponent,
    DataComponent,
    ReportsComponent,
  ]
})
export class PagesModule { }
