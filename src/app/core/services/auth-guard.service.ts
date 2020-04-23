import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { AuthService } from "dlv-ng-auth";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    return this.checkLogin(`/${route.path}`);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin(state.url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin(state.url);
  }

  private checkLogin(url: string): boolean {
    const isLoggedIn = this.auth.isAuthenticated();
    if (url === "/login" && isLoggedIn) {
      this.navigateTo("dashboard");
      return true;
    } else if (url === "/login" && !isLoggedIn) {
      return true;
    } else if (isLoggedIn) {
      return true;
    } else {
      this.navigateTo("login");
      return false;
    }
  }

  private navigateTo(route: string) {
    this.router.navigate([`/${route}`], { replaceUrl: true });
  }
}
