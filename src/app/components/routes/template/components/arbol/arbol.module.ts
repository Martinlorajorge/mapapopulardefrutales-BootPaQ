import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbolComponent } from './arbol/arbol.component';
import { SolicituddedonacionModule } from '../../solicituddedonacion/solicituddedonacion.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'solicitud/:id', component: SolicituddedonacionModule },
];

@NgModule({
  declarations: [
    ArbolComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SolicituddedonacionModule,
    CommonModule
  ],
  exports: [
    ArbolComponent
]
})
export class ArbolModule { }
