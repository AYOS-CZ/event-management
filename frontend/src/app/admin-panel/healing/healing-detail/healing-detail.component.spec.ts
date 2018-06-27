import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingDetailComponent } from './healing-detail.component';

describe('HealingDetailComponent', () => {
  let component: HealingDetailComponent;
  let fixture: ComponentFixture<HealingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
