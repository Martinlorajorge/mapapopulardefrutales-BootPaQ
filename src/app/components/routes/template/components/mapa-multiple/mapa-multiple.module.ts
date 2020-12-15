import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaMultipleComponent } from './mapa-multiple/mapa-multiple.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MapaMultipleComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
    }),
    RouterModule
  ],
  exports: [
    MapaMultipleComponent
   ]
})
export class MapaMultipleModule { }
