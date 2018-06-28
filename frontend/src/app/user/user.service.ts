import { ApiService } from './../shared/api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

// Stands for basic user management methods which would be available for each type of user

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public auth: BehaviorSubject<User | any> = new BehaviorSubject({});

  constructor(
    private api: ApiService
  ) { }

  init() {
    let temp = localStorage.getItem('auth');
    if (temp && temp.length) {
      let userData: User = JSON.parse(temp);
      if (userData && userData.role) {
        this.auth.next(userData);
      }
    }
  }

  login(userData) {
    console.log('User logged in', userData);
    this.auth.next(userData);
    localStorage.setItem('auth', JSON.stringify(userData));
  }

  logout() {
    console.log('User logged out');
    this.auth.next({});
    localStorage.removeItem('auth');
  }



}
