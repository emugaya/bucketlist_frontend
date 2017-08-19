import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { SERVER } from '../server';


@Injectable()
export class AuthService {

  constructor(private http: Http) { 
  	// console.log(this.postLogin)
  }

  postLogin(user){
  	let headers = new Headers;
  	headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestoptions = new RequestOptions({
            headers: headers
        });
    return this.http.post(SERVER+'auth/login',user, requestoptions)
		}
}
