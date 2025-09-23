import { TestBed } from '@angular/core/testing';

import { Modify } from './modify';

describe('Modify', () => {
  let service: Modify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
