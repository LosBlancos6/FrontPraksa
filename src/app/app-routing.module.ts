import { Route } from "@angular/compiler/src/core";
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'app', loadChildren: './pages/pages.module#PagesModule'},
    { path: '**', component: NotFoundComponent },

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


