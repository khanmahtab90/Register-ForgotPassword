import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AppComponent,
    
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxCaptchaModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
