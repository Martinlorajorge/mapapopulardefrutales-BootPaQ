import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudconfirmadaComponent } from './solicitudconfirmada/solicitudconfirmada.component';
import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';


const routes: Routes = [
  //tambien poner un calco de las path en cada modulo para que funcione
  { path: 'confirmada/:id', component: SolicitudconfirmadaComponent},
  { path: 'a-confirmar/:id', component: SolicitudconfirmadaComponent},
  // { path: 'confirmadas', component: SolicitudconfirmadaComponent },
  //{ path: 'cardrecolector', component: CardrecolectorModule }
];






@NgModule({
  declarations: [
    SolicitudconfirmadaComponent
  ],
  imports: [
    CardrecolectorModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SolicitudconfirmadaComponent,
    RouterModule
 ]
})
export class SolicitudconfirmadaModule { }
