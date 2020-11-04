import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleorganizacionComponent } from './detalleorganizacion/detalleorganizacion.component';



@NgModule({
  declarations: [DetalleorganizacionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DetalleorganizacionModule
 ]
})
export class DetalleorganizacionModule { }
