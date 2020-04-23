import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService, AuthService } from "dlv-ng-auth";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  currentRoute: any = document.location.href;
  routes: Array<Object> = [];
  userProfileAvatar: any;
  userProfie: any;
  userFirstName;
  userLastName;
  public avatarBackgroundcolor;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private userServices: UserService,
    private authService: AuthService
  ) {
    const userDetails = this.userServices.getUserFromJwt();
    this.userProfie =
      userDetails["first_name"] && userDetails["last_name"]
        ? userDetails["first_name"] + " " + userDetails["last_name"]
        : "No name";
    this.userFirstName = userDetails["first_name"];
    this.userLastName = userDetails["last_name"];
    this.userProfileAvatar =
      userDetails["first_name"] && userDetails["last_name"]
        ? userDetails["first_name"][0] + userDetails["last_name"][0]
        : userDetails["first_name"][0] + userDetails["first_name"][1];
    this.avatarBackgroundcolor = this.userServices.getBackgroundColor(
      this.userProfie
    );
  }

  ngOnInit() {
    this.router.events.subscribe(data => {
      this.currentRoute = data["url"];
    });
    this.routes = [
      {
        path: "/dashboard/inbound",
        label: "Inbound",
        exactMatch: false
      },
      {
        path: "/dashboard/outbound",
        label: "Outbound",
        exactMatch: false
      },
      {
        path: "/dashboard/service-center",
        label: "Service Center",
        exactMatch: true
      },
      {
        path: "/dashboard/last-mile",
        label: "Last Mile",
        exactMatch: true
      }
    ];
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
