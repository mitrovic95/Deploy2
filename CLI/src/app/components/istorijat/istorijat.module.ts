import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './istorijat.routing';
import { IstorijatComponent } from 'src/app/components/istorijat/istorijat.component';
import { IstorijatService } from 'src/app/services/istorijat.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
    routing,
  ],
  declarations: [IstorijatComponent],
  providers: [IstorijatService]
})
export class IstorijatModule { }
