import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsolicitudModule } from '../components/cardsolicitud/cardsolicitud.module';

import { MissolicitudesComponent } from './missolicitudes/missolicitudes.component';

const routes: Routes = [
  { path: 'misolicitud', component: MissolicitudesComponent },
];



@NgModule({
  declarations: [
    MissolicitudesComponent
  ],
  imports: [
    CardsolicitudModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    MissolicitudesComponent,
    RouterModule
 ]
})
export class MissolicitudesModule { }
