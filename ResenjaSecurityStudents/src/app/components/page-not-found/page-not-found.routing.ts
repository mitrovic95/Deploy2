import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent}
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
