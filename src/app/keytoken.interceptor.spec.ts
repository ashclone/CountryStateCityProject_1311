import { TestBed } from '@angular/core/testing';

import { KeytokenInterceptor } from './keytoken.interceptor';

describe('KeytokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeytokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeytokenInterceptor = TestBed.inject(KeytokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
