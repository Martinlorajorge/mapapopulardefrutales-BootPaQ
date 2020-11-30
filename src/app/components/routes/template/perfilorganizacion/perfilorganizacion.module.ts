import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilorganizacionComponent } from './perfilorganizacion/perfilorganizacion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: PerfilorganizacionComponent },


];





@NgModule({
  declarations: [PerfilorganizacionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    PerfilorganizacionComponent
  ]
})
export class PerfilorganizacionModule { }
