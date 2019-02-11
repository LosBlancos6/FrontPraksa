import { HomeComponent } from './home/home.component';
import { Route } from "@angular/compiler/src/core";
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';
import { ReportsComponent } from './reports/reports.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'map', component: MapComponent},
            {path: 'data', component: DataComponent},
            {path: 'reports', component: ReportsComponent},
        ],
    }, 
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule{}
