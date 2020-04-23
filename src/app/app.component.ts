import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { AuthService } from "dlv-ng-auth";
import { MatMenuService } from "dlv-ng-services-menu";

import { environment } from "@env/environment";
import { Router, Route } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private menuService: MatMenuService
  ) {}

  ngOnInit() {
    this.authService.init({
      environment: environment.env
    });

    this.menuService.init({
      environment: environment.env
    });
  }
}
