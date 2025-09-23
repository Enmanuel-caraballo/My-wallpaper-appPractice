import { TestBed } from '@angular/core/testing';

import { GlobalUid } from './global-uid';

describe('GlobalUid', () => {
  let service: GlobalUid;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalUid);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
