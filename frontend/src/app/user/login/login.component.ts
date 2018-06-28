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

  public loginForm = new FormGroup({});
  public formErrors = {
    email: '',
    password: ''
  }
  public responseError: string;


  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(res => {
      this.responseError = '';
    })
  }

  login() {
    console.log('login with', this.loginForm.value);
    this.api.post('login', this.loginForm.value).subscribe((res: User) => {
      this.user.login(res);
      this.api.setAuth(res.token);
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
      
    }, err => {
      this.responseError = err;
    })
  }

}
