import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOperationComponent } from './event-operation.component';

describe('EventOperationComponent', () => {
  let component: EventOperationComponent;
  let fixture: ComponentFixture<EventOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
