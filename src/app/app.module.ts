import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  Http,
  Response,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  XHRBackend
} from "@angular/http";

import { ToastrModule } from "ngx-toastr";
// import { SharedModule } from "@app/shared/shared.module";
// import { ToastOptions } from "@app/constants";
// import { CoreModule } from "@app/core/core.module";

import { AppRoutesModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { ToastOptions } from "./constants";
// declare var require: any;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    
    // CoreModule,
    // SharedModule,
    ToastrModule.forRoot(ToastOptions),
    AppRoutesModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
