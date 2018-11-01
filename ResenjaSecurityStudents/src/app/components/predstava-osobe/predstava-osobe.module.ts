import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './predstava-osobe.routing';
import { VestiModule } from 'src/app/components/vesti/vesti.module';
import { PredstavaOsobeComponent } from 'src/app/components/predstava-osobe/predstava-osobe.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [PredstavaOsobeComponent],
  providers: []
})
export class PredstavaOsobeModule { }
