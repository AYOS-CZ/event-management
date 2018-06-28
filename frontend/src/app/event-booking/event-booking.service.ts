import { ApiService } from './../shared/api.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  public chosenEvents = [];

  constructor(
    private api: ApiService
  ) { 

  }

  getList() {
    return this.api.get('bookingList');
  }
}
