import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private router: Router,
              private authService: AuthService) {}
  canActivate(): boolean {
    // if ( this.authService.isLoggedIn()) {
    //     return true;
    // } else { window.location.href = 'https://im3sso.azurewebsites.net'; }

    // // this.router.navigate(['/login']);
    // return false;
    return true;
    
}
}
