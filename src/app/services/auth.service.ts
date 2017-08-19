import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { SERVER } from '../server';


@Injectable()
export class AuthService {

  constructor(private http: Http) { 
  }

// Headers to be used for post and  put
  postHeaders(){
  	  	let headers = new Headers;
  	  	let token = sessionStorage.getItem('token')
  		headers.append('Content-Type', 'application/json');
    	headers.append('Accept', 'application/json');
    	headers.append('Authorization', 'Basic '+btoa(token))
    	let requestoptions = new RequestOptions({
            headers: headers
        });
        return requestoptions;

  }
  // Headers used for get and delete metthods

  getHeaders(){
  	  	let headers = new Headers;
  	  	let token = sessionStorage.getItem('token')
    	headers.append('Accept', 'application/json');
    	headers.append('Authorization', 'Basic '+btoa(token))
    	let requestoptions = new RequestOptions({
            headers: headers
        });

        return requestoptions;
  }
  // Headers used for user registration and LongRunningScriptDetectedEvent

  authHeaders(){
  		let headers = new Headers;
  		headers.append('Content-Type', 'application/json');
    	headers.append('Accept', 'application/json');
    	let requestoptions = new RequestOptions({
            headers: headers
        });
        return requestoptions;
  }

  // This method handles user Login
  postLogin(user){
    	return this.http.post(SERVER+'auth/login',user, this.authHeaders());
	}

  // This method handles user Registration
  postRegister(user) {
  		return this.http.post(SERVER+'auth/register', user, this.authHeaders());

  } 

}
