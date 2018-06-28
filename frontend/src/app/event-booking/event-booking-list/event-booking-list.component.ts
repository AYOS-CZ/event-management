import { Component, OnInit } from '@angular/core';
import { EventBookingService } from '../event-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-booking-list',
  templateUrl: './event-booking-list.component.html',
  styleUrls: ['./event-booking-list.component.css']
})
export class EventBookingListComponent implements OnInit {

  public events = [];
  public chosenEvents = [];
  public haveChecked: boolean = false;

  constructor(
    private bookingService: EventBookingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookingService.getList().subscribe((res: any) => {
      console.log('got event list', res);
      this.events = res.events;
    }, err => {
      console.error('got error on events list');
    })
  }

  checkEvent(event, index) {
    //TODO: if user is not authorized, show email capture; if they are authorized, ask if they would like to leave a note of wishing to go there
    if (!event.availableSlots) {
      console.log('SHOW EMAIL CAPTURE');
    } else {
      if (this.events[index].checked) this.events[index].checked = false;
      else this.events[index].checked = true;
      this.checkChecked();
    }
  }

  checkChecked() {
    this.chosenEvents = this.events.filter(event => {
      if(event.checked) return event;
    });
  }

  checkout() {
    this.bookingService.chosenEvents = this.chosenEvents;
    this.router.navigateByUrl('/booking/order')
  }


}
