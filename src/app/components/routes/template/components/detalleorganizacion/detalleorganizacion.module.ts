import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleorganizacionComponent } from './detalleorganizacion/detalleorganizacion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'detalleorg', component: DetalleorganizacionComponent },

];




@NgModule({
  declarations: [
    DetalleorganizacionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    DetalleorganizacionComponent
 ]
})
export class DetalleorganizacionModule { }
