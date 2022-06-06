import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  // check if the user is logged in or not before entering the home page
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.auth.checkAuth().then(response => {
         // logged in
        if(response) {
          // proceed to home
          return true;
        }
        // not logged in
        else {
          // go to login page
          this.goToLogin();
          return false;
        }
       })
         // error when check login status, go to login regardless
       .catch(e => {
        this.goToLogin();
        return false;
       });
  }

  goToLogin() {
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }

}
