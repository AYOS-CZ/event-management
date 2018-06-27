import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private router: Router
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        let auth = localStorage.getItem('auth');
        if (auth) {            
            return true;
        } else {
            this.router.navigateByUrl('/auth-placeholder');
            return false;
        }
    }
}
