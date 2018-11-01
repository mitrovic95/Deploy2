import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { SlikeComponent } from 'src/app/components/slike/slike.component';

const routes: Routes = [
  { path: '', component: SlikeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
