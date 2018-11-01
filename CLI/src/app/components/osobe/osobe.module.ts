import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './osobe.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OsobeComponent } from 'src/app/components/osobe/osobe.component';
import { OsobeService } from 'src/app/services/osobe.service';
import { OsobeItemComponent } from 'src/app/components/osobe/osobe-item/osobe-item.component';

@NgModule({
  imports: [
CommonModule,
  FormsModule,
  ReactiveFormsModule,
    routing,
  ],
  declarations: [OsobeComponent, OsobeItemComponent],
  providers: [OsobeService]
})
export class OsobeModule { }
