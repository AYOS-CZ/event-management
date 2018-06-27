import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListComponent, EventDetailComponent, CreateEventComponent]
})
export class EventsModule { }
