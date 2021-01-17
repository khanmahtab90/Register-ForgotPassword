import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './app/forgotpassword/forgotpassword/forgotpassword.component';
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { ResetpasswordComponent } from './app/resetpassword/resetpassword.component';

const routes: Routes = [

  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent  
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
