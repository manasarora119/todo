import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services';

import { LayoutComponent, ForbiddenComponent } from './components';


const pagesRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        // canActivateChild: [AuthGuardService],
        children: [{
                        path: '',
                        redirectTo: 'dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
                       
                    }
                ]
            
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CoreRoutesModule {
}
