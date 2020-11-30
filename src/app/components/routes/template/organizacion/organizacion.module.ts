import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacioncardModule } from '../components/organizacioncard/organizacioncard.module';


const routes: Routes = [
    { path: 'organizacion', component: OrganizacionComponent },
    { path: 'organizacion/:id', component: OrganizacionComponent },
];




@NgModule({
  declarations: [
    //  OrganizacionComponent
  ],
  imports: [
    OrganizacioncardModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    OrganizacionComponent,
    RouterModule,
  ]
})
export class OrganizacionModule { }
