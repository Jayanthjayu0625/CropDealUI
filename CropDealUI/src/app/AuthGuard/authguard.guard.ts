// import { CanActivateFn } from '@angular/router';

// export const authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getUserRole();

      if (next.data && next.data['roles'] && next.data['roles'].includes(userRole)) {
        return true;
      } else {
        return this.router.createUrlTree(['/unauthorized']);
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
