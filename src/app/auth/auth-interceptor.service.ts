import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, take } from 'rxjs/operators';

// AuthInterceptorService serves as a token handler which allows fetching and storing recipes
// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        // user in auth.service.ts is initialized as null so token should only be added if there is a user
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token!),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
