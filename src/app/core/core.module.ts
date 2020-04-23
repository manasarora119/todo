import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CoreRoutesModule } from "./core.routes";

import { DlvNgAuthModule } from "dlv-ng-auth";
import { DlvMaterialServicesMenuModule } from "dlv-ng-services-menu";

import {MatRadioModule} from '@angular/material/radio';
import {
  LayoutComponent,
  SidebarComponent,
  ForbiddenComponent,
  LoginComponent,
  DeveloperGuideComponent
} from "./components";

import {
  AuthGuardService,
  LoaderService,
  BroadcasterService
} from "./services/";

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    ForbiddenComponent,
    LoginComponent,
    DeveloperGuideComponent
  ],
  imports: [
    CommonModule,
    DlvNgAuthModule,
    MatRadioModule,
    // MatSelectModule,
    DlvMaterialServicesMenuModule,
    FormsModule,
    CoreRoutesModule
  ],
  entryComponents: [DeveloperGuideComponent]
})
export class CoreModule {}
