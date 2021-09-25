import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router:Router,private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.isLoading.next(true);
    let tokenizedReq;
      tokenizedReq = req.clone({
        setHeaders:{
          'device-type': 'Web',
          'ver': '1.0',
          'auth-token': localStorage.getItem('token'),
        }
      })
    return next.handle(tokenizedReq).pipe(
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => this.loaderService.isLoading.next(false))
    );


  }

}
