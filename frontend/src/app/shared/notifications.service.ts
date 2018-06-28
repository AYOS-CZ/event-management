import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  showError(message: string) { 
    console.error('Notification Error: ' + message);
  }

  showNotification(message: string, link: string = null) {
    console.log('Notification: ' + message);
  }
}
