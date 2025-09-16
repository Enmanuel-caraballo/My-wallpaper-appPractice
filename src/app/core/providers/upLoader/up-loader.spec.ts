import { TestBed } from '@angular/core/testing';

import { UpLoader } from './up-loader';

describe('UpLoader', () => {
  let service: UpLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
