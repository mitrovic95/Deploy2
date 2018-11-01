import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './repertoar.routing';
import { VestiModule } from 'src/app/components/vesti/vesti.module';
import { RepertoarComponent } from 'src/app/components/repertoar/repertoar.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [RepertoarComponent],
  providers: []
})
export class RepertoarModule { }
