import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaarbolesComponent } from './mapaarboles/mapaarboles.component';
import { Routes, RouterModule } from '@angular/router';
import { MapsModule } from '../maps/maps.module';



const routes: Routes = [

  { path: '', component: MapaarbolesComponent,
    // children:[
    //    {
    //      path: '', component: 
    //    },
    //  ]
},
  { path: 'google', component: MapsModule },

];





@NgModule({
  declarations: [
    MapaarbolesComponent,
  ],
  imports: [
    MapsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  // providers: [
  //   MapsModule,
  // ],
  exports: [
    MapaarbolesComponent,
 ]
})
export class MapaarbolesModule { }
