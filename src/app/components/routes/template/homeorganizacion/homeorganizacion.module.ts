import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HomeorganizacionComponent } from './homeorganizacion/homeorganizacion.component';
import { CardsolirecModule } from '../components/cardsolirec/cardsolirec.module';
import { CardconforgModule } from '../components/cardconforg/cardconforg.module';







const routes: Routes = [
    { path: 'homeorganizacion', component: HomeorganizacionComponent },
    { path: 'cardsolireg', component: CardsolirecModule },
    { path: 'cardconforg', component: CardconforgModule },
];

@NgModule({
    imports: [
        CardsolirecModule,
        CardconforgModule,
        MaterialModule,
        CommonModule,
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
