import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { IstorijatComponent } from 'src/app/components/istorijat/istorijat.component';

const routes: Routes = [
  { path: '', component: IstorijatComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
