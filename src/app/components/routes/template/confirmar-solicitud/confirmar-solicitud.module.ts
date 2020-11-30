import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarSolicitudComponent } from './confirmar-solicitud/confirmar-solicitud.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';



const routes: Routes = [
  { path: 'confirmar/:id', component: ConfirmarSolicitudComponent}
  
];

@NgModule({
  declarations: [ConfirmarSolicitudComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [
    ConfirmarSolicitudComponent,
    RouterModule
 ]
})
export class ConfirmarSolicitudModule { }
