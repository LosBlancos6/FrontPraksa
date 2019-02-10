import { Route } from "@angular/compiler/src/core";
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'app', loadChildren: './pages/pages.module#PagesModule'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}


