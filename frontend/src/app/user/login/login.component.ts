import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  loggedIn(res: User) {
    switch(res.role) {
      case 'admin':
        this.router.navigateByUrl('/admin/events');
      break;
      case 'user':
        this.router.navigateByUrl('/personal/events');
      break;
      case 'operator':
        this.router.navigateByUrl('/operator/events');
      break;
    }
  }

}
