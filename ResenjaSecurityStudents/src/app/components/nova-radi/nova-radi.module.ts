import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './nova-radi.routing';
import { NovaRadiComponent } from 'src/app/components/nova-radi/nova-radi.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [NovaRadiComponent],
  providers: []
})
export class NovaRadiModule { }
