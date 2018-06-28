import { TestBed, inject } from '@angular/core/testing';

import { EventBookingService } from './event-booking.service';

describe('EventBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBookingService]
    });
  });

  it('should be created', inject([EventBookingService], (service: EventBookingService) => {
    expect(service).toBeTruthy();
  }));
});
