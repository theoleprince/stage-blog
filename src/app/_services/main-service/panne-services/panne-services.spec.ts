import { TestBed } from '@angular/core/testing';

import { PanneServices } from './panne-services';

describe('PanneServices', () => {
  let service: PanneServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanneServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
