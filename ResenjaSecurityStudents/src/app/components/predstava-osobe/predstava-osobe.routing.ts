import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PredstavaOsobeComponent } from 'src/app/components/predstava-osobe/predstava-osobe.component';

const routes: Routes = [
  { path: '', component: PredstavaOsobeComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
