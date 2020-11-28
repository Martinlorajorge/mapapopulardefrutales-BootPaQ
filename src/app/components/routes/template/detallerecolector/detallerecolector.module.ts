import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallerecolectorComponent } from './detallerecolector/detallerecolector.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // { path: 'detallerecolector', component: DetallerecolectorComponent },
    {
      path: 'detallerecolector/:id', component: DetallerecolectorComponent
    },
];



@NgModule({
  declarations: [
    // DetallerecolectorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    DetallerecolectorComponent,
    RouterModule,
  ]

})
export class DetallerecolectorModule { }
