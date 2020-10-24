import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoarbolComponent  } from './nuevoarbol/nuevoarbol.component';



@NgModule({
  declarations: [
    NuevoarbolComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   NuevoarbolComponent
]
})
export class NuevoarbolModule { }
