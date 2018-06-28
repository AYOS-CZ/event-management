import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardOperatorService } from './auth-guard-operator.service';

describe('AuthGuardOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardOperatorService]
    });
  });

  it('should be created', inject([AuthGuardOperatorService], (service: AuthGuardOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
