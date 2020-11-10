import { MapsModule } from '../maps/maps.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoarbolComponent  } from './nuevoarbol/nuevoarbol.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  { path: 'nuevoarbol', component: NuevoarbolComponent },
];

@NgModule({
  declarations: [
    NuevoarbolComponent
  ],
  imports: [
    MapsModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
   NuevoarbolComponent
]
})
export class NuevoarbolModule { }
