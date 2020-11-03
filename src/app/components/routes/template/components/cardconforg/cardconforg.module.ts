import { CardconforgComponent } from './cardconforg/cardconforg.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cardconforg', component: CardconforgComponent },
];


@NgModule({
  declarations: [
    CardconforgComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardconforgComponent
]
})
export class CardconforgModule { }
