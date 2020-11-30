import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetalleSolicitudComponent } from './card-detalle-solicitud/card-detalle-solicitud.component';



@NgModule({
  declarations: [CardDetalleSolicitudComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardDetalleSolicitudComponent
]
})
export class CardDetalleSolicitudModule { }
