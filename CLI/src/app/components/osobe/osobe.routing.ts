import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { OsobeComponent } from 'src/app/components/osobe/osobe.component';

const routes: Routes = [
  { path: '', component: OsobeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
