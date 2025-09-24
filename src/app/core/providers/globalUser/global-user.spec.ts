import { TestBed } from '@angular/core/testing';

import { GlobalUser } from './global-user';

describe('GlobalUser', () => {
  let service: GlobalUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
