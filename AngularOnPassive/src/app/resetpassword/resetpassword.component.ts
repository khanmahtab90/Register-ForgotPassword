import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  private resetUserData={
    token:'',
    email:''
  }; 
  private changed:boolean=false;
  constructor(private _route:ActivatedRoute,
    private _auth:AuthService) { } 

  ngOnInit() { 
  }

  resetPassword(){
    // if(this._route.snapshot.queryParamMap.has('token')){
    //   console.log('token available');
    // }
    // if(this._route.snapshot.queryParamMap.has('email')){
    //   console.log('email available');
    // }
    if((this._route.snapshot.queryParamMap.has('token')) && (this._route.snapshot.queryParamMap.has('email'))){
    this.resetUserData.token=this._route.snapshot.queryParamMap.get('token');
    this.resetUserData.email=this._route.snapshot.queryParamMap.get('email');

    this._auth.resetPassword(this.resetUserData).subscribe(
      res=> {
        this.changed=true;
      },
      err=> console.error("Some Error occured")  
      
    )
  }else{
    console.log('Token is missing');
  }
  }
}
