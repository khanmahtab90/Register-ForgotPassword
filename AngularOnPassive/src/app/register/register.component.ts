import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  siteKey:string;
  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) {
                this.siteKey = '6LchfzAaAAAAAH91HBFXAK2eVfC-yl7dTz9ZCrg9';
                
               }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
       
        console.log(res);
      },
      err => console.log(err) 
    )      
  }


}
