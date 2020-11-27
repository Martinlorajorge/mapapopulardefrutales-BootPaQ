import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsolicitudModule } from '../components/cardsolicitud/cardsolicitud.module';
import { CardsolicitudDeOrganizacionModule } from '../components/cardsolicitud-de-organizacion/cardsolicitud-de-organizacion.module';

import { MissolicitudesComponent } from './missolicitudes/missolicitudes.component';
import { SolicitudorganizacionComponent } from '../solicitudorganizacion/solicitudorganizacion/solicitudorganizacion.component';
import { SolicitudconfirmadaComponent } from '../solicitudconfirmada/solicitudconfirmada/solicitudconfirmada.component';

const routes: Routes = [
  { 
    path: '', component: MissolicitudesComponent,
    children:[//creo una ruta hija que llama al componente hijo, mis-solicitudes/confirmada/ tambien hay que poner la ruta en el module que llamo
      {
        path: 'confirmada/:id', component: SolicitudconfirmadaComponent
      },
      {
        path: 'a-confirmar/:id', component: SolicitudconfirmadaComponent
      },
      {
        path: 'de-organizacion/:id', component: SolicitudorganizacionComponent
      }
    ]
  },  
];



@NgModule({
  declarations: [
    MissolicitudesComponent
  ],
  imports: [
    CardsolicitudModule,
    CardsolicitudDeOrganizacionModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    MissolicitudesComponent,
    RouterModule
 ]
})
export class MissolicitudesModule { }
