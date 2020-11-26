import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../../services/core/translator/translator.service';
import { MenuService } from '../../services/core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './template/pages/pages.module';
import { NuevoarbolModule } from './template/nuevoarbol/nuevoarbol.module';
import { SolicituddedonacionModule } from './template/solicituddedonacion/solicituddedonacion.module';
import { MissolicitudesModule } from './template/missolicitudes/missolicitudes.module';
import { SolicitudconfirmadaModule } from './template/solicitudconfirmada/solicitudconfirmada.module';
import { CuidadodearbolesModule } from './template/cuidadodearboles/cuidadodearboles.module';
import { PerfilorganizacionModule } from './template/perfilorganizacion/perfilorganizacion.module';

// importarcion del lado de la organizacion

import { HomeorganizacionModule } from './template/homeorganizacion/homeorganizacion.module';
import { SolicitudrecoleccionModule } from './template/solicitudrecoleccion/solicitudrecoleccion.module';
import { MapaarbolesModule } from './template/mapaarboles/mapaarboles.module';
import {ConfirmadaorganizacionModule} from './template/confirmadaorganizacion/confirmadaorganizacion.module';
import { MicuentaorganizacionModule } from './template/micuentaorganizacion/micuentaorganizacion.module';
import { RecolectoresModule } from './template/recolectores/recolectores.module';
import { NuevorecolectorModule } from './template/nuevorecolector/nuevorecolector.module';
import { DetallerecolectorModule } from './template/detallerecolector/detallerecolector.module';







import { menu } from './menu';
import { routes } from './routes';
import { MisArbolesComponent } from './template/mis-arboles/mis-arboles/mis-arboles.component';
import { NuevoArbolComponent } from './template/mis-arboles/nuevo-arbol/nuevo-arbol.component';

@NgModule({
    imports: [
        DetallerecolectorModule,
        NuevorecolectorModule,
        RecolectoresModule,
        MicuentaorganizacionModule,
        MapaarbolesModule,
        SolicitudrecoleccionModule,
        HomeorganizacionModule,
        PerfilorganizacionModule,
        CuidadodearbolesModule,
        SolicitudconfirmadaModule,
        MissolicitudesModule,
        ConfirmadaorganizacionModule,
        SolicituddedonacionModule,
        NuevoarbolModule,
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true }),
        PagesModule
    ],
    declarations: [
     MisArbolesComponent,
     NuevoArbolComponent],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
