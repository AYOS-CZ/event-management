import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingListComponent } from './healing-list.component';

describe('HealingListComponent', () => {
  let component: HealingListComponent;
  let fixture: ComponentFixture<HealingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
