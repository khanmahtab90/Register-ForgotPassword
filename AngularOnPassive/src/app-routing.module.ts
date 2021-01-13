import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './app/forgotpassword/forgotpassword/forgotpassword.component';
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'

const routes: Routes = [
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent  
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
