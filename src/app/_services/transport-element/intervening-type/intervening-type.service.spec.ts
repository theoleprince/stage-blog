import { TestBed } from '@angular/core/testing';

import { InterveningTypeService } from './intervening-type.service';

describe('InterveningTypeService', () => {
  let service: InterveningTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterveningTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
