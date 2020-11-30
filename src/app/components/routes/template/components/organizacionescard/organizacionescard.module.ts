import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionescardComponent } from './organizacionescard/organizacionescard.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionComponent } from '../../organizacion/organizacion/organizacion.component';

const routes: Routes = [
  { path: 'organizacion/:id', component: OrganizacionComponent},
  //{ path: 'organizacionescard', component: OrganizacionescardComponent },

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
