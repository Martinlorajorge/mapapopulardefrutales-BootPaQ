import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecolectoresComponent } from './recolectores/recolectores.component';
import { Routes, RouterModule } from '@angular/router';

import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';





const routes: Routes = [
    { path: 'recolectores', component: RecolectoresComponent },
    { path: 'cardrecoleector', component: CardrecolectorModule },
];




@NgModule({
  declarations: [
    RecolectoresComponent
  ],
  imports: [
    CardrecolectorModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RecolectoresComponent,
    RouterModule,
  ]
})
export class RecolectoresModule { }
