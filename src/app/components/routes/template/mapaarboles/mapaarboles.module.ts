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
