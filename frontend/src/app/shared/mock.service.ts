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

  login(data) {
    return this.wrapper(<User>{ token: 'some_jwt_token', firstName: 'John', lastName: 'Doe', date_of_birth: 760303828, email: 'johndoe@gmail.com', phone: '+79197621370', role: 'user', validated: false })
  }

  bookingList(data) {
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
          availableSlots: 0,
          id: 1
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
          availableSlots: 18,
          id: 2
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
            'healing'
          ],
          availableSlots: 25,
          id: 3
        },
      ]
    });
  }

  bookingDetail(data) {
    let events = [
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
        availableSlots: 18,
        id: 2,
        subEvents: {
          healing: {
            price: 35,
            currency: 'EUR',
            intervals: [
              {
                start: '9:00',
                end: '9:30',
                availableSlots: 4
              },
              {
                start: '9:30',
                end: '10:00',
                availableSlots: 2
              },
              {
                start: '10:00',
                end: '10:30',
                availableSlots: 3
              },
              {
                start: '10:30',
                end: '11:00',
                availableSlots: 3
              },
              {
                start: '11:30',
                end: '11:00',
                availableSlots: 0
              },
              {
                start: '12:00',
                end: '12:30',
                availableSlots: 2
              },
              {
                start: '12:30',
                end: '13:00',
                availableSlots: 3
              },
              {
                start: '13:00',
                end: '13:30',
                availableSlots: 2
              },
              {
                start: '13:30',
                end: '14:00',
                availableSlots: 0
              },
              {
                start: '14:00',
                end: '14:30',
                availableSlots: 4
              }
            ],
            availableSlots: 18
          },
          lecture: {
            price: 10,
            currency: 'EUR',
            availableSlots: 90,
            title: 'Awareness and Meditation',
            lecturer: {
              name: 'Rajneesh Acharya',
              img: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxOTc1MzQ1Njc3/bhagwan-shree-rajneesh-ranch.jpg'
            }
          }
        }
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
        subEvents: {
          healing: {
            price: 30,
            currency: 'EUR',
            intervals: [
              {
                start: '9:00',
                end: '9:30',
                availableSlots: 4
              },
              {
                start: '9:30',
                end: '10:00',
                availableSlots: 2
              },
              {
                start: '10:00',
                end: '10:30',
                availableSlots: 0
              },
              {
                start: '10:30',
                end: '11:00',
                availableSlots: 3
              },
              {
                start: '11:30',
                end: '11:00',
                availableSlots: 1
              },
              {
                start: '12:00',
                end: '12:30',
                availableSlots: 2
              },
              {
                start: '12:30',
                end: '13:00',
                availableSlots: 3
              },
              {
                start: '13:00',
                end: '13:30',
                availableSlots: 2
              },
              {
                start: '13:30',
                end: '14:00',
                availableSlots: 0
              },
              {
                start: '14:00',
                end: '14:30',
                availableSlots: 4
              }
            ],
            availableSlots: 23
          }
        },
        id: 3
      },
    ]

    let chosenEvents = events.filter(event => {
      if (data.ids.indexOf(event.id) != -1) return event;
    })

    return this.wrapper(chosenEvents);
  }

  serverError() {
    return this.wrapper({ message: 'COMMON.RANDOM_SERVER_ERROR' });
  }

  logout() {
    return this.wrapper({ result: true });
  }


}
