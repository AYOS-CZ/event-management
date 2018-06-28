import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingListComponent } from './event-booking-list.component';

describe('EventBookingListComponent', () => {
  let component: EventBookingListComponent;
  let fixture: ComponentFixture<EventBookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
