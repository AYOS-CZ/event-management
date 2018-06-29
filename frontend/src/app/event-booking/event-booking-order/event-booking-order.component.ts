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
  public loading = true;
  private interval;
  public order = {
    total: 0,
    currency: 'EUR',
    parts: []
  }

  constructor(
    private bookingService: EventBookingService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.events = this.bookingService.chosenEvents;
    if (!this.events.length) {
      // this.events = [{ id: 2 }, { id: 3 }]
      this.router.navigateByUrl('/booking');
    }

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
          if (interval.checked) this.order.parts.push({ type: 'healing', price: event.subEvents.healing.price, currency: event.subEvents.healing.currency, time: interval.start + '-' + interval.end, event: event })
        })
      }
      if (event.subEvents.lecture) {
        if (event.subEvents.lecture.checked) this.order.parts.push({ type: 'lecture', price: event.subEvents.lecture.price, currency: event.subEvents.lecture.currency, event: event })        
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

}
