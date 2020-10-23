import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbolComponent } from './arbol/arbol.component';



@NgModule({
  declarations: [ArbolComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArbolComponent
]
})
export class ArbolModule { }
