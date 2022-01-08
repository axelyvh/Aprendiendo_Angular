import { TestBed } from '@angular/core/testing';

import { FormSavedGuard } from './form-saved.guard';

describe('FormSavedGuard', () => {
  let guard: FormSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
