import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliasComponent } from './familias/familias.component';
import { Routes, RouterModule } from '@angular/router';
import { FamiliascardModule } from '../components/familiascard/familiascard.module';
import { FamiliaComponent } from '../familia/familia/familia.component';
import { FamiliaModule } from '../familia/familia.module';


const routes: Routes = [
    { path: '', component: FamiliasComponent,
       children: [
          {
            path: 'familia/:id', component: FamiliaModule
          },
        ]
  },
];



@NgModule({
  declarations: [
    FamiliasComponent
  ],
  imports: [
    FamiliascardModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FamiliasComponent,
    RouterModule,
  ]
})
export class FamiliasModule { }
