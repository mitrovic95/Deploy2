import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './vesti.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VestiService } from 'src/app/services/vesti.service';
import { VestiComponent } from 'src/app/components/vesti/vesti.component';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
    routing,
  ],
  declarations: [VestiComponent],
  providers: [VestiService]
})
export class VestiModule { }
