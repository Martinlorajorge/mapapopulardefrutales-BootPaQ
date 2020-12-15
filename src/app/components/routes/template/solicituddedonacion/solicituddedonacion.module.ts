import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicituddedonacionComponent } from './solicituddedonacion/solicituddedonacion.component';
import { Routes, RouterModule } from '@angular/router';
import { DetallededonacionModule } from '../components/detallededonacion/detallededonacion.module';
import { FormsModule} from '@angular/forms';


const routes: Routes = [
  //{ path: 'confirmada/:id', component: SolicituddedonacionComponent},
  //{ path: 'a-confirmar/:id', component: SolicituddedonacionComponent},
  { path: 'nuevasolicitud/:id', component: SolicituddedonacionComponent },
  { path: 'detalle', component: DetallededonacionModule },
  //{ path: '', component: SolicituddedonacionComponent },

];

@NgModule({
  declarations: [
    SolicituddedonacionComponent
  ],
  imports: [
    DetallededonacionModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [
    SolicituddedonacionComponent,
    RouterModule
 ]

})
export class SolicituddedonacionModule { }
