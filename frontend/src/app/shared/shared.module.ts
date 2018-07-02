import { AuthGuardService } from './auth-guard.service';
import { AuthGuardOperatorService } from './auth-guard-operator.service';
import { AuthGuardAdminService } from './auth-guard-admin.service';
import { RouterModule } from '@angular/router';
import { CrudService } from './crud.service';
import { ApiService } from './api.service';
import { GlobalService } from './global.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsService } from './notifications.service';
import { MockService } from './mock.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserModule } from '../user/user.module';
import { FormsModule } from '@angular/forms';

// stands for services shared between all modules

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GlobalService,
    ApiService,
    NotificationsService,
    MockService,
    CrudService,
    RouterModule,
    AuthGuardAdminService,
    AuthGuardOperatorService,
    AuthGuardService
  ],
  exports: [
    TranslateModule,
    RouterModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
