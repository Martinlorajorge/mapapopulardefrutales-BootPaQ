import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionescardComponent } from './organizacionescard/organizacionescard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'organizacionescard', component: OrganizacionescardComponent },

];



@NgModule({
  declarations: [OrganizacionescardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    OrganizacionescardComponent
   ]
})
export class OrganizacionescardModule { }
