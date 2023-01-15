import { take } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      // Subscribe to 1 user
      take(1),
      map((user) => {
        // return !!user;

        // Replaces tap
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']); // Goes to /login if user is not isAuth
      })
      // tap((isAuth) => {
      //   if (!isAuth) {
      //     this.router.navigate(['/login']);
      //   }
      // })
    );
  }
}
