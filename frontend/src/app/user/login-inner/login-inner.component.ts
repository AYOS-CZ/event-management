import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-login-inner',
  templateUrl: './login-inner.component.html',
  styleUrls: ['./login-inner.component.css']
})
export class LoginInnerComponent implements OnInit {

  public loginForm = new FormGroup({});
  public formErrors = {
    email: '',
    password: ''
  }
  public responseError: string;
  @Output() responseSuccess: EventEmitter<any> = new EventEmitter();

  @Input() embed = false;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.pattern(EMAIL_PATTERN), Validators.required]],
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
      this.responseSuccess.emit(res);
      
    }, err => {
      this.responseError = err;
    })
  }

}
