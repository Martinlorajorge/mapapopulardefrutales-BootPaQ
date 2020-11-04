import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicituddedonacionComponent } from './solicituddedonacion/solicituddedonacion.component';
import { Routes, RouterModule } from '@angular/router';
import { DetallededonacionModule } from '../components/detallededonacion/detallededonacion.module';



const routes: Routes = [
  { path: 'solicitud/:id', component: SolicituddedonacionComponent },
  { path: 'detalle', component: DetallededonacionModule },
];

@NgModule({
  declarations: [
    SolicituddedonacionComponent
  ],
  imports: [
    DetallededonacionModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SolicituddedonacionComponent,
    RouterModule
 ]

})
export class SolicituddedonacionModule { }
