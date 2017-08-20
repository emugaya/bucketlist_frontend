import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { SERVER } from '../server';


@Injectable()
export class AuthService {
  token: any ="";

  constructor(private http: Http) { 
    
  }

  
// Headers to be used for post and  put
  postHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let tokenized = localStorage.getItem("token");
    console.log(tokenized);
    headers.append('Authorization', 'Basic '+btoa(tokenized+":"+"unused"));
    headers.append('Accept', 'application/json');
    // headers.append('token','token');
    let requestoptions = new RequestOptions({
            headers: headers
        });
    console.log("In auth.service :" + requestoptions)
    return requestoptions;

  }
  // Headers used for get and delete metthods

  getHeaders(){
  	  let headers = new Headers;
      headers.append('Accept', 'application/json');
      console.log("before basic btooa: " +localStorage.getItem("token"));
      headers.append('Authorization', 'Basic '+btoa(localStorage.getItem("token")+":"+"unused"));
      let requestoptions = new RequestOptions({
            headers: headers
        });

        console.log(requestoptions);

        return requestoptions;
  }
  // Headers used for user registration and Longin

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
  		return this.http.post(SERVER+'auth/register/', user, this.authHeaders());

  } 

}
