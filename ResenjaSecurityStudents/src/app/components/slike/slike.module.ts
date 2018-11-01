import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './slike.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SlikeComponent } from 'src/app/components/slike/slike.component';
import { SlikeService } from 'src/app/services/slike.service';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
    routing,
  ],
  declarations: [SlikeComponent],
  providers: [SlikeService]
})
export class SlikeModule { }
