import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './template/pages/login/login.component';
import { RegisterComponent } from './template/pages/register/register.component';
import { RecoverComponent } from './template/pages/recover/recover.component';
import { LockComponent } from './template/pages/lock/lock.component';
import { MaintenanceComponent } from './template/pages/maintenance/maintenance.component';
import { Error404Component } from './template/pages/error404/error404.component';
import { Error500Component } from './template/pages/error500/error500.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./template/home/home.module').then(m => m.HomeModule) },
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
            { path: 'extras', loadChildren: () => import('./template/extras/extras.module').then(m => m.ExtrasModule) }
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
    { path: '**', redirectTo: 'home' }

];
