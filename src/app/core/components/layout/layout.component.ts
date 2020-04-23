import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  HostListener,
  AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
import { environment } from "@env/environment";

import { LoaderService } from "../../services";
import { DeveloperGuideComponent } from "./../developer-guide/developer-guide.component";
import { MatCenterService } from "dlv-ng-services-menu";
import { UserService } from "dlv-ng-auth";

const MOBILE_SCREEN = 768;

@Component({
  selector: "layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  currentPageTitle: string = "";
  setLayout: boolean = true;
  collapseSidebar: boolean = false;
  public centerList: Array<string>;
  selectedCenterName;
  innerWidth: number;
  isMobileScreen = false;
  isCollapseSidebarOpen;

  @HostListener("window:resize", ["$event"])
  @HostListener("window:load", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isMobileScreen = this.innerWidth <= MOBILE_SCREEN ? true : false;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private loader: LoaderService,
    private vcr: ViewContainerRef,
    private componentResolver: ComponentFactoryResolver,
    private centerService: MatCenterService
  ) {
    this.getRouteParams();
    this.selectedCenterName =
      this.centerService.getCenterName() || "Center not selected";
  }

  ngOnInit() {
    this.addDeveloperGuides();
    this.centerService.onCenterChange().subscribe(
      res => {
        console.log(res);
        console.log(
          `Changes Center Detail:- Center Name : ${
            res.center_name
          }, Center ID : ${res.center_id}`
        );
        if (res && res.center_name) {
          this.selectedCenterName = res.center_name;
        }
      },
      error => {}
    );
  }

  /**
   *
   * @description Method to get title and layout from Data sent when route changes.
   * @var event : has Layout and title. Layout defines whether we need sidebar and navbar.
   *  Title contains the title for page
   *
   **/
  getRouteParams() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === "primary"),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this.setLayout = event["layout"];
        this.currentPageTitle = event["title"];
        this.title.setTitle(`Delhivery | ${event["title"]}`);
      });
  }

  /**
   *
   * @description Method to handle logout, navigating user back to login page
   *
   **/
  onLogout() {
    this.router.navigate(["/login"]);
  }

  /**
   *
   *	@description Method to handle toggle of sidebar on clicking on bars
   *
   **/
  toggleSidebar() {
    this.collapseSidebar = !this.collapseSidebar;
    this.isCollapseSidebarOpen = true;
  }

  /**
   *
   * @description Method to handle scenario when center is changed
   *
   */
  centerChange(data) {
    location.reload();
  }

  addDeveloperGuides() {
    if (environment.env === "dev") {
      const componentFactory = this.componentResolver.resolveComponentFactory(
        DeveloperGuideComponent
      );
      this.vcr.clear();
      this.vcr.createComponent(componentFactory);
    }
  }

  goState() {
    location.reload();
  }

  closeSidebar(evt) {
    if (this.isMobileScreen && !evt) {
      if (this.collapseSidebar && !this.isCollapseSidebarOpen) {
        this.collapseSidebar = false;
      }
    }

    this.isCollapseSidebarOpen = false;
  }
}
