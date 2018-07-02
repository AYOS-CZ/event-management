import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListOperatorComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListOperatorComponent;
  let fixture: ComponentFixture<EventListOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
