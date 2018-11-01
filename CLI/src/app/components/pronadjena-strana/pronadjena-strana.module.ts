import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './pronadjena-strana.routing';
import { PronadjenaStranaComponent } from 'src/app/components/pronadjena-strana/pronadjena-strana.component';
import { VestiModule } from 'src/app/components/vesti/vesti.module';

@NgModule({
  imports: [
    CommonModule,
    VestiModule,
    routing,
  ],
  declarations: [PronadjenaStranaComponent],
  providers: []
})
export class PronadjenaStranaModule { }
