import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor(
    private loginServervice: AuthenticationService,
    private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.loginServervice.isLogin().then(resp => {
        if(resp === true) {
          return true
        }else {
          this.router.navigateByUrl('/login')
        }
      })
      
      
  }

}
