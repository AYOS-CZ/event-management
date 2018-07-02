import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrContactComponent } from './login-or-contact.component';

describe('LoginOrContactComponent', () => {
  let component: LoginOrContactComponent;
  let fixture: ComponentFixture<LoginOrContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOrContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
