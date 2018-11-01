import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PredstavaOsobeItemComponent } from 'src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component';

const routes: Routes = [
  { path: '', component: PredstavaOsobeItemComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
