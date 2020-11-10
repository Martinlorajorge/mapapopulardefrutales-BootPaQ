import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudconfirmadaComponent } from './solicitudconfirmada/solicitudconfirmada.component';
import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';


const routes: Routes = [

  { path: 'confirmadas', component: SolicitudconfirmadaComponent },
  { path: 'cardrecolector', component: CardrecolectorModule },
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
