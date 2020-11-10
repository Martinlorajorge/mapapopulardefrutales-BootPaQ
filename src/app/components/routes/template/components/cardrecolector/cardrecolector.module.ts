import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardrecolectorComponent } from './cardrecolector/cardrecolector.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'cardrecolector', component: CardrecolectorComponent },

];








@NgModule({
  declarations: [
    CardrecolectorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
 CardrecolectorComponent
]

})
export class CardrecolectorModule { }
