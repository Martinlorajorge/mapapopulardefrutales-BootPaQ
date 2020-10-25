import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallededonacionComponent } from './detallededonacion/detallededonacion.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'detalle', component: DetallededonacionComponent },
];

@NgModule({
  declarations: [
    DetallededonacionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    DetallededonacionComponent
]
})
export class DetallededonacionModule { }
