import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  UserData = {};
  private emailSent:boolean=false;
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    console.log('forgotpasswordngononit')
  }

  ForgotPaasword(){
    this._auth.forgotPassword(this.UserData).subscribe(
      res => {
        
        this.emailSent=true;
        
      },
      err => console.log(err)
    ) 
  }

}
