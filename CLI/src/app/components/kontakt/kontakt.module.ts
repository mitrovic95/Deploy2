import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './kontakt.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { KontaktComponent } from 'src/app/components/kontakt/kontakt.component';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
    routing,
  ],
  declarations: [KontaktComponent],
  providers: []
})
export class KontaktModule { }
