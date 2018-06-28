import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { User } from '../user/user';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private router: Router
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        let auth: User;
        try {
            auth = JSON.parse(localStorage.getItem('auth'));
        } catch (e) {
            console.error('auth could not be parsed!');
        }
        
        if (auth && auth.role == 'user') {            
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}
