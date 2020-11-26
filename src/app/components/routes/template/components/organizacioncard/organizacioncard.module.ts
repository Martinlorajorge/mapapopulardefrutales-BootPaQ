import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacioncardComponent } from './organizacioncard/organizacioncard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'organizacioncard', component: OrganizacioncardComponent },

];




@NgModule({
  declarations: [OrganizacioncardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    OrganizacioncardComponent,
   ]
})
export class OrganizacioncardModule { }
