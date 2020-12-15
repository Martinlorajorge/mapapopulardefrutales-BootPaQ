import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NuevaSolicitudOrgComponent } from './nueva-solicitud-org/nueva-solicitud-org.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'nuevasolicitud/:id', component: NuevaSolicitudOrgComponent },
];

@NgModule({
  declarations: [NuevaSolicitudOrgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule 
  ],
  exports: [
    NuevaSolicitudOrgComponent
 ]
})
export class NuevaSolicitudOrgModule { }
