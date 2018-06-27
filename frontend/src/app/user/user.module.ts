import { OperatorService } from './operator.service';
import { AdminService } from './admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    AdminService,
    OperatorService
  ],
  declarations: []
})
export class UserModule { }
