import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HomeorganizacionComponent } from './homeorganizacion/homeorganizacion.component';
import { CardsolirecModule } from '../components/cardsolirec/cardsolirec.module';
import { CardconforgModule } from '../components/cardconforg/cardconforg.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudconfirmadaComponent } from '../solicitudconfirmada/solicitudconfirmada/solicitudconfirmada.component';
import { SolicitudrecoleccionComponent } from '../solicitudrecoleccion/solicitudrecoleccion/solicitudrecoleccion.component';
import { CardsolicitudModule } from '../components/cardsolicitud/cardsolicitud.module';






const routes: Routes = [
    { path: '', component: HomeorganizacionComponent,
  children: [
    {
      path: 'a-confirmar/:id', component: SolicitudconfirmadaComponent
    },
    {
      path: 'solicitudrecoleccion/id:', component: SolicitudrecoleccionComponent
    }
  ]
  },
    { path: 'cardsolireg', component: CardsolirecModule },
    { path: 'cardconforg', component: CardconforgModule },
];

@NgModule({
    imports: [
        CardsolirecModule,
        CardconforgModule,
        CardsolicitudModule,
        MaterialModule,
        CommonModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
      HomeorganizacionComponent,
    ],
    exports: [
      HomeorganizacionComponent,
      RouterModule
    ]
})
export class HomeorganizacionModule { }
