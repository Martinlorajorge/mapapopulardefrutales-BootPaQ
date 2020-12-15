import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudorganizacionComponent } from './solicitudorganizacion/solicitudorganizacion.component';
import { Routes, RouterModule } from '@angular/router';
import { CardrecolectorModule } from '../components/cardrecolector/cardrecolector.module';
import { SolicituddedonacionModule } from '../solicituddedonacion/solicituddedonacion.module';
import { ConfirmarSolicitudComponent } from '../confirmar-solicitud/confirmar-solicitud/confirmar-solicitud.component';

const routes: Routes = [
  { path: 'de-organizacion/:id', component: SolicitudorganizacionComponent},
  //{ path: 'de-organizacion/:id', component: SolicitudorganizacionComponent},
  //{ path: 'peticion', component: SolicitudorganizacionComponent },
  //{ path: 'Cardrecolector', component: CardrecolectorModule },
  { path: 'solicitud', component: SolicituddedonacionModule },
  {
    path: 'confirmar/:id', component: ConfirmarSolicitudComponent
  }



];

@NgModule({
  declarations: [
    SolicitudorganizacionComponent
  ],
  imports: [
    SolicituddedonacionModule,
    CardrecolectorModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SolicitudorganizacionComponent,
    RouterModule
    
 ]
})
export class SolicitudorganizacionModule { }
