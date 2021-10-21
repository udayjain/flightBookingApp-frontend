import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9002/api/v1.0/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  registerform: any = {
    firstname: null,
    lastname: null,
    mobno: null,
    dob: null,
    gender: null,
    emailId: null,
    password: null
  };

  loginRequest: any = {
    userName: null,
    password: null
  };

  login(loginRequest: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      loginRequest
    }, httpOptions);
  }

  register(registerform: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      registerform
    }, httpOptions);
  }
}