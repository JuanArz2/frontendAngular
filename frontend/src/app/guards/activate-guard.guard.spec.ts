import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activateGuardGuard } from './activate-guard.guard';

describe('activateGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activateGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
