import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsolicitudComponent } from './cardsolicitud/cardsolicitud.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cardsolicitud', component: CardsolicitudComponent },
];


@NgModule({
  declarations: [
    CardsolicitudComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardsolicitudComponent
]
})
export class CardsolicitudModule { }
