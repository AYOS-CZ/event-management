import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef, ViewChild } from '@angular/core';
import { UserService } from '../../user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { EMAIL_PATTERN } from '../../user/login-inner/login-inner.component';

@Component({
  selector: 'app-login-or-contact',
  templateUrl: './login-or-contact.component.html',
  styleUrls: ['./login-or-contact.component.css']
})
export class LoginOrContactComponent implements OnInit {

  
  @Output() result: EventEmitter<any> = new EventEmitter();
  
  public contactForm = new FormGroup({});
  public formErrors = {
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  }
  public responseError: string;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private api: ApiService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.pattern(EMAIL_PATTERN), Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }

  public auth;

  public haveAccount: boolean = false;
  @Input() triggerError: EventEmitter<any>;


  ngOnInit() {
    this.auth = this.user.auth.getValue();
    this.user.auth.subscribe(res => {
      console.log('auth', res)
      this.auth = res;
      if(res && res.role)
        this.result.emit(true);
    })

    // console.log('contact form el', this.contactFormEl);
    // this.contactFormEl.ngSubmit.emit();

    this.contactForm.statusChanges.subscribe(status => {
      if(status == 'VALID' && this.contactForm.value.firstName.length) {
        this.result.emit(true);
      }
      else this.result.emit(false);
    })
  }

  loggedIn(res) {
    console.log('loggedIn', res);
  }

}
