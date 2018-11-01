import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { NovaRadiComponent } from 'src/app/components/nova-radi/nova-radi.component';

const routes: Routes = [
  { path: '', component: NovaRadiComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
