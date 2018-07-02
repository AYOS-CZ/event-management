import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailUserComponent } from './event-detail.component';

describe('EventDetailUserComponent', () => {
  let component: EventDetailUserComponent;
  let fixture: ComponentFixture<EventDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
