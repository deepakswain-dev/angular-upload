




import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.CurrentUserValue;
        if (currentUser) {
            // authorised so return true
            // check if route is restricted by role
            // if (route.data.roles && route.data.roles.indexOf(currentUser.RoleName) === -1) {
            //     // role not authorised so redirect to home page
            //     this.router.navigate(['/']);
            //     return false;
            // }
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}