import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevorecolectorComponent } from './nuevorecolector/nuevorecolector.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: 'nuevorecolector', component: NuevorecolectorComponent },
    
];




@NgModule({
  declarations: [
    NuevorecolectorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    NuevorecolectorComponent,
    RouterModule,
  ]
})
export class NuevorecolectorModule { }
