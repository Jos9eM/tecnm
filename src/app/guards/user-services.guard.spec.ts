import { TestBed } from '@angular/core/testing';

import { UserServicesGuard } from './user-services.guard';

describe('UserServicesGuard', () => {
  let guard: UserServicesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserServicesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
