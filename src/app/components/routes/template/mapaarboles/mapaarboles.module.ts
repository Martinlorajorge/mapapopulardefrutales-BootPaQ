import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaarbolesComponent } from './mapaarboles/mapaarboles.component';
import { Routes, RouterModule } from '@angular/router';
// import { MapsModule } from '../maps/maps.module';



const routes: Routes = [

  { path: 'mapaarboles', component: MapaarbolesComponent },

];





@NgModule({
  declarations: [
    MapaarbolesComponent,
    // MapsModule
  ],
  imports: [
    // MapsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    MapaarbolesComponent,
    RouterModule
 ]
})
export class MapaarbolesModule { }
