import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudorganizacionComponent } from './solicitudorganizacion/solicitudorganizacion.component';
import { Routes, RouterModule } from '@angular/router';
import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';
import { SolicituddedonacionModule } from '../solicituddedonacion/solicituddedonacion.module';




const routes: Routes = [

  { path: 'peticion', component: SolicitudorganizacionComponent },
  { path: 'Cardrecolector', component: CardrecolectorModule },
  { path: 'solicitud', component: SolicituddedonacionModule },



];







@NgModule({
  declarations: [
    SolicitudorganizacionComponent
  ],
  imports: [
    SolicituddedonacionModule,
    CardrecolectorModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
 ]
})
export class SolicitudorganizacionModule { }
