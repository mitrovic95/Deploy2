import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './predstava-osobe-item.routing';
import { PredstavaOsobeItemComponent } from 'src/app/components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [PredstavaOsobeItemComponent],
  providers: []
})
export class PredstavaOsobeItemModule { }
