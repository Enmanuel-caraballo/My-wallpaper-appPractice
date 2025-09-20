import { TestBed } from '@angular/core/testing';

import { GlobalUrl } from './global-url';

describe('GlobalUrl', () => {
  let service: GlobalUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalUrl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
