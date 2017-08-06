import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {User} from "../models/User";


@Injectable()
export class AuthService {
  private API_URL:string = 'http://localhost:8080/';
  private isLoggedIn:boolean = false;

  constructor(
    public http: Http,
  ) {  }

  login(user:User) {
    let params = {
      "username": user.username,
      "password": user.password
    };
    let headers = new Headers(
      {
      'Content-Type': "application/json",
      'Access-Control-Allow-Credentials':true
    });

    return this.http.post(this.API_URL+'api/login',params,
      {
        headers : headers,
        withCredentials: true
      })
      .map(response => response.json())
      .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    return Promise.reject(error.message || error);
  }

}

