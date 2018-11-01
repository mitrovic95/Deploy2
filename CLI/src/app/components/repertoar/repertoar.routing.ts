import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { RepertoarComponent } from 'src/app/components/repertoar/repertoar.component';

const routes: Routes = [
  { path: '', component: RepertoarComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
