import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//mocked data while we dont have the backend

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  wrapper(data) {
    return new Observable(observer => {
      observer.next(data);
    })
  }

  login() {
    return this.wrapper({result: true, token: 'some_jwt_token', first_name: 'John', last_name: 'Doe', date_of_birth: 760303828, email: 'johndoe@gmail.com', phone: '+79197621370'})
  } 

  serverError () {
    return this.wrapper({result: false, message: 'RANDOM_SERVER_ERROR'});
  }

  logout() {
    return this.wrapper({result: true});
  }
}
