import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'onama', pathMatch: 'full'},
  // { path: 'login', redirectTo: 'uloguj', pathMatch: 'full'},
  // { path: 'home', loadChildren: './components/pronadjena-strana/pronadjena-strana.module#PronadjenaStranaModule'},
  { path: 'login', loadChildren: './components/login/login.module#LoginModule'},
  { path: 'onama', loadChildren: './components/nova-radi/nova-radi.module#NovaRadiModule'},
  { path: 'istorijat', loadChildren: './components/istorijat/istorijat.module#IstorijatModule'},
  { path: 'ansambl', loadChildren: './components/osobe/osobe.module#OsobeModule'},
  { path: 'galerija', loadChildren: './components/slike/slike.module#SlikeModule'},
  { path: 'kontakt', loadChildren: './components/kontakt/kontakt.module#KontaktModule'},
  { path: 'repertoar', loadChildren: './components/repertoar/repertoar.module#RepertoarModule'},
  { path: 'predstave', loadChildren: './components/predstave/predstave.module#PredstaveModule'},
  { path: 'predstava/:id',
  loadChildren: './components/predstava-osobe/predstava-osobe-item/predstava-osobe-item.module#PredstavaOsobeItemModule'},
  { path: 'osoba/:id',
  loadChildren: './components/osobe/osobe.module#OsobeModule'},
  { path: '**', loadChildren: './components/page-not-found/page-not-found.module#PageNotFoundModule'}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
