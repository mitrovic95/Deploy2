import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { VestiComponent } from 'src/app/components/vesti/vesti.component';

const routes: Routes = [
  { path: '', component: VestiComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
