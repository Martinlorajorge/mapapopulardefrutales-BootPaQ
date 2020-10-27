import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadodearbolesComponent } from './cuidadodearboles/cuidadodearboles.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'cuidados', component: CuidadodearbolesComponent },


];








@NgModule({
  declarations: [CuidadodearbolesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CuidadodearbolesComponent
  ]
})
export class CuidadodearbolesModule { }
