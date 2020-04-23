import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { LoaderService } from "@app/core/services";
import { DashboardService } from "./../services/dashboard.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three"];

  constructor(
    private loader: LoaderService,
    private toastr: ToastrService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {}

  getAPI() {
    const params = {
      page: 1,
      size: 10
    };

    this.dashboardService.getRequest(params).subscribe(
      res => {
        this.toastr.success("Hello world!", "Toastr fun!");
      },
      error => {}
    );
  }
}
