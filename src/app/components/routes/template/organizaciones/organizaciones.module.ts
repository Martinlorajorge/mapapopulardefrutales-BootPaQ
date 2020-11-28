import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionescardModule } from '../components/organizacionescard/organizacionescard.module';
import { OrganizacionComponent } from '../organizacion/organizacion/organizacion.component';


const routes: Routes = [
    {
      path: '', component: OrganizacionesComponent,
      children: [
        {
          path: 'organizacion/:id', component: OrganizacionComponent
        },
      ]
    },
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
