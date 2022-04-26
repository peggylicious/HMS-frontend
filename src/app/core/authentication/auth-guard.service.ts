import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    console.log(this.auth.isAuthenticated())
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem('access_token')) {
  //     return true;
  //   }

  //   this.router.navigate(['login']);
  //   return false;
  // }
}
