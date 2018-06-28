import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

//mocked data while we dont have the backend

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  wrapper(data) {
    return new Observable(observer => {
      console.log('returning data from mock wrapper', data);
      observer.next(data);
    })
  }

  login() {
    return this.wrapper(<User>{ token: 'some_jwt_token', firstName: 'John', lastName: 'Doe', date_of_birth: 760303828, email: 'johndoe@gmail.com', phone: '+79197621370', role: 'user', validated: false })
  }

  bookingList() {
    return this.wrapper({
      events: [
        {
          location: 'Berlin',
          street: 'City Drive, 13',
          title: 'Mighty Shamans Healing!',
          GPS: {
            lat: 36.989213,
            log: -84.231474
          },
          date: Date.now() + 100000000,
          description: 'This is going to be awesome!',
          subEvents: [
            'healing',
            'lecture'
          ],
          availableSlots: 0
        },
        {
          location: 'Frankfurt',
          street: 'Driver\'s Lane, 22',
          title: 'Mighty Shamans Healing Again!',
          description: 'This is going to be awesome!',
          GPS: {
            lat: 56.989213,
            log: -84.231474
          },
          date: Date.now() + 300000000,
          subEvents: [
            'healing',
            'lecture'
          ],
          availableSlots: 13
        },
        {
          location: 'Berlin',
          street: 'Other Street, 1',
          title: 'Learn Raiki Yourself!',
          description: 'This is going to be awesome!',
          GPS: {
            lat: 16.989213,
            log: -84.231474
          },
          date: Date.now() + 5000000000,
          subEvents: [
            'lecture'
          ],
          availableSlots: 25,
        },
      ]
    });
  }

  serverError() {
    return this.wrapper({ message: 'COMMON.RANDOM_SERVER_ERROR' });
  }

  logout() {
    return this.wrapper({ result: true });
  }


}
