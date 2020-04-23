import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ForbiddenComponent,  } from '@app/core/components';

// import { AuthGuardService } from '@app/core/services';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/core/core.module#CoreModule',
    canActivate: []
  },

  // {
  //   path: 'forbidden',
  //   component: ForbiddenComponent
  // },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { 'useHash': true })
  ],
  exports: [
    RouterModule
  ]
}
)
export class AppRoutesModule {

}
