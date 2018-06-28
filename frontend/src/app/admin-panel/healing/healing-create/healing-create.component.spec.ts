import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingCreateComponent } from './healing-create.component';

describe('HealingCreateComponent', () => {
  let component: HealingCreateComponent;
  let fixture: ComponentFixture<HealingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
