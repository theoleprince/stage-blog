import { TestBed } from '@angular/core/testing';

import { RhServices } from './rh-services';

describe('RhServices', () => {
  let service: RhServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
