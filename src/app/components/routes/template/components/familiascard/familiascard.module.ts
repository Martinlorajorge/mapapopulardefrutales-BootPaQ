import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliascardComponent } from './familiascard/familiascard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'familiascard', component: FamiliascardComponent },

];



@NgModule({
  declarations: [FamiliascardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FamiliascardComponent
   ]
})
export class FamiliascardModule { }
