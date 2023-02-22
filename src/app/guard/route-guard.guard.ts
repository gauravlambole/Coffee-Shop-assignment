import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {

  constructor(
    private authservise: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userData = this.authservise.getUser();
    return userData ? true : this.router.navigate(['login']);
  }

}
