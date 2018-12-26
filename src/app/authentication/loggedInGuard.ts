import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Adal5Service } from 'adal-angular5';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private auth: Adal5Service) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.userInfo.authenticated) {
            return true;
        } else {
            this.auth.login();
            return false;
        }
    }
}
