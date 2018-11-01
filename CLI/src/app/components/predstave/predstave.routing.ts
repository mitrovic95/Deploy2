import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PredstaveComponent } from 'src/app/components/predstave/predstave.component';

const routes: Routes = [
  { path: '', component: PredstaveComponent},
  // { path: '', redirectTo: 'pstrana', pathMatch: 'full'},
  // { path: 'login', loadChildren: './components/login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
