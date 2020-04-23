import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { DLVMaterialModule } from 'dlv-material';
import { DashboardRoutesModule } from './dashboard.routes';
import { DashboardComponent } from './components';
import { DashboardService } from './services';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutesModule,
    SharedModule,
    ReactiveFormsModule,
    DLVMaterialModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers : [
    DashboardService
  ]
})
export class DashboardModule { }
