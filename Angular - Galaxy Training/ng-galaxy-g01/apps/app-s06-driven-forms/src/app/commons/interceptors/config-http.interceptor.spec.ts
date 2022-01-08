import { TestBed } from '@angular/core/testing';

import { ConfigHttpInterceptor } from './config-http.interceptor';

describe('ConfigHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConfigHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ConfigHttpInterceptor = TestBed.inject(ConfigHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
