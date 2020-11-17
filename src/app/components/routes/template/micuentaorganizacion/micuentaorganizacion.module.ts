import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicuentaorganizacionComponent } from './micuentaorganizacion/micuentaorganizacion.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: 'micuenta', component: MicuentaorganizacionComponent },
];



@NgModule({
  declarations: [
    MicuentaorganizacionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
    MicuentaorganizacionComponent
  ]
})
export class MicuentaorganizacionModule { }
