import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmadaorganizacionComponent } from './confirmadaorganizacion/confirmadaorganizacion.component';
import { Routes, RouterModule } from '@angular/router';
import { DetalleorganizacionModule } from '../components/detalleorganizacion/detalleorganizacion.module';


const routes: Routes = [

  { path: 'solicitudconfirmada', component: ConfirmadaorganizacionComponent },
  { path: 'detalleorg', component: DetalleorganizacionModule },


];





@NgModule({
  declarations: [
    ConfirmadaorganizacionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DetalleorganizacionModule
  ],
  exports: [
    RouterModule,
    ConfirmadaorganizacionComponent
 ]
})
export class ConfirmadaorganizacionModule { }
