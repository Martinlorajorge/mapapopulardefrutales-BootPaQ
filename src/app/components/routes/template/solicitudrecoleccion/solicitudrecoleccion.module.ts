import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudrecoleccionComponent } from './solicitudrecoleccion/solicitudrecoleccion.component';
import { Routes, RouterModule } from '@angular/router';
import { DetalleorganizacionModule } from '../components/detalleorganizacion/detalleorganizacion.module';


const routes: Routes = [

  { path: 'solicitud-recoleccion/:id', component: SolicitudrecoleccionComponent },
  // { path: 'detalleorg', component: DetalleorganizacionModule },


];






@NgModule({
  declarations: [
    SolicitudrecoleccionComponent
  ],
  imports: [
    DetalleorganizacionModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SolicitudrecoleccionComponent,
    RouterModule

 ]

})
export class SolicitudrecoleccionModule { }
