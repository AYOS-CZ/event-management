import { EventBookingService } from './../event-booking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-booking-order',
  templateUrl: './event-booking-order.component.html',
  styleUrls: ['./event-booking-order.component.css']
})
export class EventBookingOrderComponent implements OnInit {

  public chosenEvents = [];

  constructor(
    private bookingService: EventBookingService,
    private router: Router
  ) { 

  }

  ngOnInit() {
    this.chosenEvents = this.bookingService.chosenEvents;
    if(!this.chosenEvents.length) this.router.navigateByUrl('/booking');
    console.log('eventsChosen', this.chosenEvents);
  }

}
