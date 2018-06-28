import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingOrderComponent } from './event-booking-order.component';

describe('EventBookingOrderComponent', () => {
  let component: EventBookingOrderComponent;
  let fixture: ComponentFixture<EventBookingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
