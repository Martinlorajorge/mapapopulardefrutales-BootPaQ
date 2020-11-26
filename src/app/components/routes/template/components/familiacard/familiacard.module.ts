import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliacardComponent } from './familiacard/familiacard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'familiacard', component: FamiliacardComponent },

];



@NgModule({
  declarations: [FamiliacardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FamiliacardComponent
   ]
})
export class FamiliacardModule { }
