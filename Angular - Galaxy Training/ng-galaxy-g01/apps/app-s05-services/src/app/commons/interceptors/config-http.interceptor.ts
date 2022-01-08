import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'apps/app-s05-services/src/environments/environment';
import { catchError } from 'rxjs/operators';

const statusErrorsMessage: Map<number, string> = new Map([
  [ 500, 'Ocurrio un error en el servidor' ],
  [ 404, 'No tiene los permisos nesesarios para ingresar' ],
]);

const statusCustomErrorsMessage: Map<number, string> = new Map([
  [ 5554, 'Falta parametros' ],
]);

@Injectable()
export class ConfigHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
      setHeaders: {
        'X-TOKEN-2': 'dasdasdasd'
      }
    });

    return next.handle(newRequest)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        /*
        if (err.status === 500) {
          alert('Ocurrio un error en el servidor');
        }
        if (err.status === 404) {
          alert('No tiene los permisos nesesarios para ingresar');
        }
        */
        let message: string;

        if (err.error?.code) {
          message = statusCustomErrorsMessage.get(err.error.code);
          // message = err.error.message;
        } else {
          message = statusErrorsMessage.get(err.status) || 'Error Interno';
        }

        if (message) {
          alert(message);
        }

        return throwError(err);
      })
    );
  }
}
