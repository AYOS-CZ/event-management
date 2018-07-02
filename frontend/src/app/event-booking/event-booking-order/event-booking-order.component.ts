import { UserService } from './../../user/user.service';
import { EventBookingService } from './../event-booking.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-booking-order',
  templateUrl: './event-booking-order.component.html',
  styleUrls: ['./event-booking-order.component.css']
})
export class EventBookingOrderComponent implements OnInit, OnDestroy {

  public events = [];
  public loading: boolean = true;
  private contactValid: boolean = false;
  private interval;
  public order = {
    total: 0,
    currency: 'EUR',
    parts: []
  }
  public bookingErrors = {
    contact: [],
    backend: [],
    other: []
  }

  constructor(
    private bookingService: EventBookingService,
    private user: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.events = this.bookingService.chosenEvents;
    if (!this.events.length) {
      this.events = [{ id: 2 }, { id: 3 }]
      // this.router.navigateByUrl('/booking');
    }

    // this.bookingErrors.push("EMAIL_TAKEN");
    // this.bookingErrors.push("HEALING_TAKEN");

    let ids = this.events.map(event => event.id);
    console.log('request detailed events', ids);
    this.bookingService.getDetailed(ids).subscribe((res: any) => {
      this.loading = false;
      this.events = res;
      this.countdown();
      console.log('events', this.events);
    }, err => {
      this.loading = false;
      console.error('error');
    })

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  countdown() {
    this.events.forEach(event => {
      if (!event['countdown']) event['countdown'] = {
        days: this.calculateCountdown(event.date, 'day'),
        hours: this.calculateCountdown(event.date, 'hour'),
        minutes: this.calculateCountdown(event.date, 'min'),
        seconds: this.calculateCountdown(event.date, 'sec')
      };
    });
    this.interval = setInterval(() => {
      this.events.forEach(event => {
        event['countdown'].seconds = this.calculateCountdown(event.date, 'sec');
        event['countdown'].hours = this.calculateCountdown(event.date, 'hour');
        event['countdown'].minutes = this.calculateCountdown(event.date, 'min');
        event['countdown'].days = this.calculateCountdown(event.date, 'day');
      })
    }, 1000);
  }

  calculateCountdown(date, type) {
    let now = Date.now();
    let diff = date - now;

    switch (type) {
      case 'day':
        return Math.floor(diff / (1000 * 60 * 60 * 24));
      case 'hour':
        return Math.floor((diff / (1000 * 60 * 60)) % 24)
      case 'min':
        return Math.floor((diff / 1000 / 60) % 60);
      case 'sec':
        return Math.floor((diff / 1000) % 60);;
    }
  }

  setTimeout() {

  }

  calculateOrder() {
    this.order.total = 0;
    this.order.parts = [];
    this.events.forEach(event => {
      if (event.subEvents.healing) {
        event.subEvents.healing.intervals.forEach(interval => {
          if (interval.checked) this.order.parts.push({ type: 'HEALING', price: event.subEvents.healing.price, currency: event.subEvents.healing.currency, time: interval.start + '-' + interval.end, event: event })
        })
      }
      if (event.subEvents.lecture) {
        if (event.subEvents.lecture.checked) this.order.parts.push({ type: 'LECTURE', price: event.subEvents.lecture.price, currency: event.subEvents.lecture.currency, event: event })        
      }
    })
    
    this.order.parts.forEach(part => {
      this.order.total += part.price;
    });
    console.log('order calculate', this.order);
  }

  checkSlot(interval, event) {
    console.log('checkSlot', interval);
    if (interval.availableSlots) {
      interval.checked = !interval.checked;
    }
    this.calculateOrder();
  }

  checkLecture(lecture, event) {
    if (lecture.availableSlots) {
      lecture.checked = !lecture.checked;
    }
    this.calculateOrder();
  }

  contactChanged(res) {
    console.log('contactChanged', res);
    this.contactValid = res;
    if(!this.contactValid) this.bookingErrors.contact = ['FILL_CONTACT'];
    else this.bookingErrors.contact = [];
  }

  book() {

    if(!this.contactValid) this.bookingErrors.contact = ['FILL_CONTACT'];
    else this.bookingErrors.contact = [];

    //TODO: make a booking POST to backend here
    //TODO: check for backend response errors here
    // if(!this.contactValid) this.bookingErrors.contact = ['FILL_CONTACT'];
    // else this.bookingErrors.contact = [];

    let haveErrors = false;
    for (const key in this.bookingErrors) {
      if(this.bookingErrors[key].length) haveErrors = true;
    }

    if(!haveErrors) {
      this.router.navigateByUrl('/personal/events');
    }
  }

}
