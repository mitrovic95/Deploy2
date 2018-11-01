import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { KontaktComponent } from 'src/app/components/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', component: KontaktComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
