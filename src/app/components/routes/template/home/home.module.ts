import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';

import { ArbolModule } from '../components/arbol/arbol.module';
import { NuevoarbolModule } from '../nuevoarbol/nuevoarbol.module';




const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nuevoarbol', component: NuevoarbolModule},
];

@NgModule({
    imports: [
        NuevoarbolModule,
        MaterialModule,
        ArbolModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
        RouterModule
    ]
})
export class HomeModule { }