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

  post(endpoint: string, data: any, customErrorHandler = null) {
    return new Observable(observer => {
      if (CONFIG.isMock) {
        this.mock[endpoint]().subscribe(res => {
          observer.next(res);
        }, err => this.handleError);
      } else {
        this.http.post(CONFIG.apiUrl + '/' + endpoint, data, {headers: this.headers}).subscribe(res => {
          observer.next(res);
        }, err => {
          if(customErrorHandler) customErrorHandler(err);
          else this.handleError(err, observer);
        });
      }
    })
  }

  get(endpoint: string, customErrorHandler = null) {
    return new Observable(observer => {
      if (CONFIG.isMock) {
        this.mock[endpoint]().subscribe(res => {
          observer.next(res);
        }, err => this.handleError);
      } else {
        this.http.post(CONFIG.apiUrl + '/' + endpoint, {headers: this.headers}).subscribe(res => {
          observer.next(res);
        }, err => {
          if(customErrorHandler) customErrorHandler(err);
          else this.handleError(err, observer);
        });
      }
    })
  }

  put(endpoint: string, id: string, data: any, customErrorHandler = null) {
    return new Observable(observer => {
      if (CONFIG.isMock) {
        this.mock[endpoint]().subscribe(res => {
          observer.next(res);
        }, err => this.handleError);
      } else {
        this.http.put(CONFIG.apiUrl + '/' + endpoint + '/' + id, data, {headers: this.headers}).subscribe(res => {
          observer.next(res);
        }, err => {
          if(customErrorHandler) customErrorHandler(err);
          else this.handleError(err, observer);
        });
      }
    })
  }

  delete(endpoint: string, id: string, customErrorHandler = null) {
    return new Observable(observer => {
      if (CONFIG.isMock) {
        this.mock[endpoint]().subscribe(res => {
          observer.next(res);
        }, err => this.handleError);
      } else {
        this.http.delete(CONFIG.apiUrl + '/' + endpoint + '/' + id, {headers: this.headers}).subscribe(res => {
          observer.next(res);
        }, err => {
          if(customErrorHandler) customErrorHandler(err);
          else this.handleError(err, observer);
        });
      }
    })
  }

  handleError(error: any, observer) {
    this.notifications.showError(error.message);
    observer.error(error.message);
  }

  setAuth(token) {
    this.token = token;
    this.headers.append('Authorisation', token);
  }

  logout() {
    this.token = null;
    this.headers = new HttpHeaders();
  }
}
