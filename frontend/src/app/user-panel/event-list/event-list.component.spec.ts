import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListUserComponent } from './event-list.component';

describe('EventListUserComponent', () => {
  let component: EventListUserComponent;
  let fixture: ComponentFixture<EventListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
