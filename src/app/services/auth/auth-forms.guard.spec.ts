import { TestBed } from '@angular/core/testing';

import { AuthFormsGuard } from './auth-forms.guard';

describe('AuthFormsGuard', () => {
  let guard: AuthFormsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthFormsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
