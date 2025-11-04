import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(): boolean | UrlTree {
    // const loggedIn = this._authService.isLoggedIn();
    // if (!loggedIn) {
    //   // redirect to login page
    //   return this._router.createUrlTree(['/login']);
    // }
    // return true; //allow access
    return;
  }
}
