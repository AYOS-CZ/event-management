import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailUserComponent } from './event-detail/event-detail.component';
import { EventListUserComponent } from './event-list/event-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListUserComponent, EventDetailUserComponent]
})
export class UserPanelModule { }
