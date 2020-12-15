import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaarbolesComponent } from './mapaarboles/mapaarboles.component';
import { Routes, RouterModule } from '@angular/router';
import { MapsModule } from '../maps/maps.module';
import { MapaMultipleModule} from '../components/mapa-multiple/mapa-multiple.module';
import { NuevaSolicitudOrgModule } from '../nueva-solicitud-org/nueva-solicitud-org.module';
import { NuevaSolicitudOrgComponent } from '../nueva-solicitud-org/nueva-solicitud-org/nueva-solicitud-org.component';


const routes: Routes = [

  { path: '', component: MapaarbolesComponent,
      children:[
        {
          path: 'nuevasolicitud/:id', component: NuevaSolicitudOrgComponent
        }
      ]
}

];

@NgModule({
  declarations: [
    MapaarbolesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MapsModule,
    MapaMultipleModule,
    NuevaSolicitudOrgModule

  ],
   providers: [
     MapsModule,
   ],
  exports: [
    MapaarbolesComponent,
    RouterModule
 ]
})
export class MapaarbolesModule { }
