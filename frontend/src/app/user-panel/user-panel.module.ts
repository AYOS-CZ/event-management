import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailUserComponent } from './event-detail/event-detail.component';
import { EventListUserComponent } from './event-list/event-list.component';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  declarations: [EventListUserComponent, EventDetailUserComponent]
})
export class UserPanelModule { }
