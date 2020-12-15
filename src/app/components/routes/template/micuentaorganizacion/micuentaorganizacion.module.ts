import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicuentaorganizacionComponent } from './micuentaorganizacion/micuentaorganizacion.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', component: MicuentaorganizacionComponent,
    // children:[
    //   {
    //     path: 'nuevorecolector/:id', component: NuevorecolectorComponent
    //   },
    // ]
  }
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
    MicuentaorganizacionComponent,
    RouterModule
  ]
})
export class MicuentaorganizacionModule { }
