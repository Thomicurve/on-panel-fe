import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
                ContentType: 'application/json'
              }
            });
          }

          return next.handle(req);
    }
}