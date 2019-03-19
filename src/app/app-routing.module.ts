import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToBeDoneComponent } from './to-be-done/to-be-done.component';
import { CartasPatrocinioComponent } from './cartas-patrocinio/cartas-patrocinio.component';

const routes: Routes = [
  { path: '', redirectTo: '/tbd', pathMatch: 'full'},
  { path: 'cartasPatrocinio', component: CartasPatrocinioComponent },
  { path: 'tbd', component: ToBeDoneComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
