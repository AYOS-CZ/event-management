import { UserService } from './user.service';
import { Injectable } from '@angular/core';

// Stands for Events Operator specific methods

@Injectable({
  providedIn: 'root'
})
export class OperatorService extends UserService {

  constructor() {
    super();
  }
}
