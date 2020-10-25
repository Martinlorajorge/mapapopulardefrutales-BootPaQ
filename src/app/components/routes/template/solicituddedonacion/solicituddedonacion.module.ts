import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicituddedonacionComponent } from './solicituddedonacion/solicituddedonacion.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'solicitud', component: SolicituddedonacionComponent },
];

@NgModule({
  declarations: [
    SolicituddedonacionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SolicituddedonacionComponent
 ]

})
export class SolicituddedonacionModule { }
