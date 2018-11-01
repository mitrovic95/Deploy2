import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './page-not-found.routing';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [PageNotFoundComponent],
  providers: []
})
export class PageNotFoundModule { }
