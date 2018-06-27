import { Observable } from 'rxjs';
import { MockService } from './mock.service';
import { CONFIG } from './config';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NotificationsService } from './notifications.service';

// Stands for API-specific methods, as  API requests wrappers, constants like server IP

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders;
  private token: string;


  constructor(
    private http: HttpClient,
    private mock: MockService,
    private notifications: NotificationsService
  ) {
    this.headers = new HttpHeaders();
  }

  post(endpoint: string, data: any) {
    return new Observable(observer => {
      if (CONFIG.isMock) {
        this.mock[endpoint].subscribe(res => {
          observer.next(res);
        }, err => this.handleError);
      } else {
        this.http.post(CONFIG.apiUrl + '/' + endpoint, data, {headers: this.headers}).subscribe(res => {
          observer.next(res);
        }, err => this.handleError)
      }
    })
  }

  handleError(error: any) {
    this.notifications.showError(error.message);
  }

  setAuth(token) {
    this.token = token;
    this.headers.append('Authorisation', token);
  }
}
