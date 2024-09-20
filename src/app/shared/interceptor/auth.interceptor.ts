import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer JWT1234!*#')
    });

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    );
  }
}
