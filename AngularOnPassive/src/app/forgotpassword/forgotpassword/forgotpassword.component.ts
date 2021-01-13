import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  UserData = {};
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    console.log('forgotpasswordngononit')
  }

  ResetPaasword(){
    this._auth.resetPassword(this.UserData).subscribe(
      res => {
        
        console.log(res);
      },
      err => console.log(err)
    ) 
  }

}
