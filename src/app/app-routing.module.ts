import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngresarComponent} from './ingresar/ingresar.component'
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
