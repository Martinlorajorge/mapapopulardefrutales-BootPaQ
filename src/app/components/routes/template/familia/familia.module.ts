import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliaComponent } from './familia/familia.component';
import { Routes, RouterModule } from '@angular/router';
import { FamiliacardModule } from '../components/familiacard/familiacard.module';


const routes: Routes = [
    { path: 'familia', component: FamiliaComponent },
    {
      path: 'familia/:id', component: FamiliaComponent
    },
];



@NgModule({
  declarations: [
    FamiliaComponent
  ],
  imports: [
    FamiliacardModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FamiliaComponent,
    RouterModule,
  ]
})
export class FamiliaModule { }
