import { TestBed } from '@angular/core/testing';

import { InterveningElementService } from './intervening-element.service';

describe('InterveningElementService', () => {
  let service: InterveningElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterveningElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
