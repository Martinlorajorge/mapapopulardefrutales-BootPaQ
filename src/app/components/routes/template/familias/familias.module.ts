import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliasComponent } from './familias/familias.component';
import { Routes, RouterModule } from '@angular/router';
import { FamiliascardModule } from '../components/familiascard/familiascard.module';


const routes: Routes = [
    { path: 'familias', component: FamiliasComponent },
];



@NgModule({
  declarations: [
    FamiliasComponent
  ],
  imports: [
    FamiliascardModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FamiliasComponent,
    RouterModule,
  ]
})
export class FamiliasModule { }
