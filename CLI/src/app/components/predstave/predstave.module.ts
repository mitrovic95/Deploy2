import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './predstave.routing';
import { PredstaveComponent } from 'src/app/components/predstave/predstave.component';
import { PredstaveService } from 'src/app/services/predstave.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [PredstaveComponent],
  providers: [PredstaveService]
})
export class PredstaveModule { }
