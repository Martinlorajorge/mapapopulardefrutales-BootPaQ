import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './template/pages/login/login.component';
import { RegisterComponent } from './template/pages/register/register.component';
import { RecoverComponent } from './template/pages/recover/recover.component';
import { LockComponent } from './template/pages/lock/lock.component';
import { MaintenanceComponent } from './template/pages/maintenance/maintenance.component';
import { Error404Component } from './template/pages/error404/error404.component';
import { Error500Component } from './template/pages/error500/error500.component';
import { OrganizacionesModule } from './template/organizaciones/organizaciones.module';


export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'mis-arboles', pathMatch: 'full' },
            { path: 'mis-arboles', loadChildren: () => import('./template/home/home.module').then(m => m.HomeModule) },
            //{ path: 'home', loadChildren: () => import('./template/home/home.module').then(m => m.HomeModule) },
            { path: 'dashboard', loadChildren: () => import('./template/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'widgets', loadChildren: () => import('./template/widgets/widgets.module').then(m => m.WidgetsModule) },
            { path: 'material', loadChildren: () => import('./template/material/material.module').then(m => m.MaterialModule) },
            { path: 'elements', loadChildren: () => import('./template/elements/elements.module').then(m => m.ElementsModule) },
            { path: 'forms', loadChildren: () => import('./template/forms/forms.module').then(m => m.FormsModule) },
            { path: 'charts', loadChildren: () => import('./template/charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./template/tables/tables.module').then(m => m.TablesModule) },
            { path: 'maps', loadChildren: () => import('./template/maps/maps.module').then(m => m.MapsModule) },
            { path: 'blog', loadChildren: () => import('./template/blog/blog.module').then(m => m.BlogModule) },
            { path: 'ecommerce', loadChildren: () => import('./template/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
            { path: 'extras', loadChildren: () => import('./template/extras/extras.module').then(m => m.ExtrasModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'mis-solicitudes', loadChildren: () => import('./template/missolicitudes/missolicitudes.module').then(m => m.MissolicitudesModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'organizaciones', loadChildren: () => import('./template/organizaciones/organizaciones.module').then(m => m.OrganizacionesModule) },
            { path: 'familias', loadChildren: () => import('./template/familias/familias.module').then(m => m.FamiliasModule) },
            // tslint:disable-next-line: max-line-length
            { path: 'recolectores', loadChildren: () => import('./template/recolectores/recolectores.module').then(m => m.RecolectoresModule)},
            // tslint:disable-next-line: max-line-length
            { path: 'micuenta', loadChildren: () => import('./template/micuentaorganizacion/micuentaorganizacion.module').then(m => m.MicuentaorganizacionModule)},
            //FALTA MAPA
            { path: 'mapa-arboles', loadChildren: () => import('./template/mapaarboles/mapaarboles.module').then(m => m.MapaarbolesModule)},
            
            // tslint:disable-next-line: max-line-length
            { path: 'homeorganizacion', loadChildren: () => import('./template/homeorganizacion/homeorganizacion.module').then(m => m.HomeorganizacionModule)},
            // tslint:disable-next-line: max-line-length
            { path: 'perfilorganizacion', loadChildren: () => import('./template/perfilorganizacion/perfilorganizacion.module').then(m => m.PerfilorganizacionModule)},
            { path: 'cuidados', loadChildren: () => import('./template/cuidadodearboles/cuidadodearboles.module').then(m => m.CuidadodearbolesModule)},



        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'mis-arboles' }

];
