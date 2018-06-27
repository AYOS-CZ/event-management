import { ApiService } from './api.service';
import { GlobalService } from './global.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsService } from './notifications.service';
import { MockService } from './mock.service';

// stands for services shared between all modules

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GlobalService,
    ApiService,
    NotificationsService,
    MockService
  ],
  declarations: []
})
export class SharedModule { }
