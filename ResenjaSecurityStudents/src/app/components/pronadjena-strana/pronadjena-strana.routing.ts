import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PronadjenaStranaComponent } from 'src/app/components/pronadjena-strana/pronadjena-strana.component';

const routes: Routes = [
  { path: '', component: PronadjenaStranaComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
