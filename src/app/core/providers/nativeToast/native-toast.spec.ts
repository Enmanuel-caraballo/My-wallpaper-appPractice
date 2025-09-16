import { TestBed } from '@angular/core/testing';

import { NativeToast } from './native-toast';

describe('NativeToast', () => {
  let service: NativeToast;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeToast);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
