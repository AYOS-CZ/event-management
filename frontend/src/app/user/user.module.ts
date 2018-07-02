import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginInnerComponent } from './login-inner/login-inner.component'; 

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginInnerComponent
  ],
  providers: [
    UserService
  ],
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, AccountComponent, LoginInnerComponent]
})
export class UserModule { }
