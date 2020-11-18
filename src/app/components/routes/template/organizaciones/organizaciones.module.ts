import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionescardModule } from '../components/organizacionescard/organizacionescard.module';


const routes: Routes = [
    { path: 'organizaciones', component: OrganizacionesComponent },
];



@NgModule({
  declarations: [
    OrganizacionesComponent
  ],
  imports: [
    OrganizacionescardModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    OrganizacionesComponent,
    RouterModule,
  ]
})
export class OrganizacionesModule { }
