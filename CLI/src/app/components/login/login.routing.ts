import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
