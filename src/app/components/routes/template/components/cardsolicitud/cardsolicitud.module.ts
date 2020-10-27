import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsolicitudComponent } from './cardsolicitud/cardsolicitud.component';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudconfirmadaModule } from '../../solicitudconfirmada/solicitudconfirmada.module';


const routes: Routes = [
  { path: 'cardsolicitud', component: CardsolicitudComponent },
  { path: 'confirmadas', component: SolicitudconfirmadaModule },
];


@NgModule({
  declarations: [
    CardsolicitudComponent
  ],
  imports: [
    SolicitudconfirmadaModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardsolicitudComponent
]
})
export class CardsolicitudModule { }
