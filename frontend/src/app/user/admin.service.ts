import { Injectable } from '@angular/core';
import { UserService } from './user.service';

// Stands for admin specific user methods

@Injectable({
  providedIn: 'root'
})
export class AdminService extends UserService {

  constructor() { 
    super();
  }
}
