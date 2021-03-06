import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBookingListComponent } from './event-booking-list/event-booking-list.component';
import { EventBookingOrderComponent } from './event-booking-order/event-booking-order.component';
import { EventBookingService } from './event-booking.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [EventBookingService],
  declarations: [EventBookingListComponent, EventBookingOrderComponent]
})
export class EventBookingModule { }
