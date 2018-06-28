import { TestBed, inject } from '@angular/core/testing';

import { HealingService } from './healing.service';

describe('HealingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealingService]
    });
  });

  it('should be created', inject([HealingService], (service: HealingService) => {
    expect(service).toBeTruthy();
  }));
});
