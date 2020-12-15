import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecolectoresComponent } from './recolectores/recolectores.component';
import { Routes, RouterModule } from '@angular/router';

import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';
import { NuevorecolectorComponent } from '../nuevorecolector/nuevorecolector/nuevorecolector.component';
import { NuevorecolectorModule } from '../nuevorecolector/nuevorecolector.module';

import { DetallerecolectorComponent } from '../detallerecolector/detallerecolector/detallerecolector.component';
import { DetallerecolectorModule } from '../detallerecolector/detallerecolector.module';





const routes: Routes = [
    { path: '', component: RecolectoresComponent,
    children:[
      {
        path: 'nuevorecolector', component: NuevorecolectorComponent
      },
      {
        path: 'detallerecolector/:id', component: DetallerecolectorComponent
      },
    ]
  },
    { path: 'cardrecoleector', component: CardrecolectorModule },
];




@NgModule({
  declarations: [
    RecolectoresComponent
  ],
  imports: [
    CardrecolectorModule,
    RouterModule.forChild(routes),
    CommonModule,
    NuevorecolectorModule,
    DetallerecolectorModule
  ],
  exports: [
    RecolectoresComponent,
    RouterModule,
  ]
})
export class RecolectoresModule { }
