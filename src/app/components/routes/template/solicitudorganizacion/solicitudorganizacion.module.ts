import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudorganizacionComponent } from './solicitudorganizacion/solicitudorganizacion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'peticion', component: SolicitudorganizacionComponent },

];







@NgModule({
  declarations: [SolicitudorganizacionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
 ]
})
export class SolicitudorganizacionModule { }
