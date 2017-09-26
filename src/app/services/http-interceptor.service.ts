import { Injectable } from '@angular/core';
import { Http,
         ConnectionBackend,
         RequestOptions,
         RequestOptionsArgs,
         Response,
         Headers,
         Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions
  ) {
    super(backend, defaultOptions);
  }

  // Your Code goes here
}