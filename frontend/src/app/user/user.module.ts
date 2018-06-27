import { OperatorService } from './operator.service';
import { AdminService } from './admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    AdminService,
    OperatorService
  ],
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, AccountComponent]
})
export class UserModule { }
