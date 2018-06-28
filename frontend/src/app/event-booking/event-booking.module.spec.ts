import { EventBookingModule } from './event-booking.module';

describe('EventBookingModule', () => {
  let eventBookingModule: EventBookingModule;

  beforeEach(() => {
    eventBookingModule = new EventBookingModule();
  });

  it('should create an instance', () => {
    expect(eventBookingModule).toBeTruthy();
  });
});
