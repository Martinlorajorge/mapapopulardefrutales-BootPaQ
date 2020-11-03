import { CardsolirecComponent } from './cardsolirec/cardsolirec.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cardsolireg', component: CardsolirecComponent },
];


@NgModule({
  declarations: [
    CardsolirecComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardsolirecComponent
]
})
export class CardsolirecModule { }
