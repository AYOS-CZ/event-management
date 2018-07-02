import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInnerComponent } from './login-inner.component';

describe('LoginInnerComponent', () => {
  let component: LoginInnerComponent;
  let fixture: ComponentFixture<LoginInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
