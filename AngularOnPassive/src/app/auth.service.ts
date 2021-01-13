import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  
  private _registerUrl = "http://localhost:52439/api/Account/register";
  private _loginUrl = "http://localhost:52439/api/token";
  private _resetPasswordUrl="http://localhost:52439/api/Account/forgotpassword";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  resetPassword(user){
    return this.http.post<any>(this._resetPasswordUrl,user);
  }
  
}
