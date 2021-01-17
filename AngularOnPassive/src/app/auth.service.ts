import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  private _registerUrl = "http://localhost:52439/api/Account/register";
  private _loginUrl = "http://localhost:52439/Token";
  private _forgotPasswordUrl="http://localhost:52439/api/Account/forgotpassword";
  private _resetPassword = "http://localhost:52439/api/Account/ResetPassword"
 
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json' 
      })
    }).pipe(catchError(this.handleError));
  }

  forgotPassword(user):Observable<any>{
    console.log("forgpopassword called")
    return this.http.post<any>(this._forgotPasswordUrl,user).pipe(catchError(this.handleError));
  }
  

  resetPassword(user):any{
    return this.http.post(this._resetPassword,user).pipe(catchError(this.handleError))
  }

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
  
}
