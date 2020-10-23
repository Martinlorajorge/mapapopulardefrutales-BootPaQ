import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ArbolModule } from '../components/arbol/arbol.module';
import { CommonModule } from "@angular/common";



const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        MaterialModule,
        ArbolModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }