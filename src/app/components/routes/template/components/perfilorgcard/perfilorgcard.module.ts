import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilorgcardComponent } from './perfilorgcard/perfilorgcard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pefilorg', component: PerfilorgcardComponent},
];

@NgModule({
  declarations: [PerfilorgcardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PerfilorgcardComponent
  ]
})
export class PerfilorgcardModule { }
