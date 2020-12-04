import { TestBed } from '@angular/core/testing';

import { NoteCritiqueService } from './note-critique.service';

describe('NoteCritiqueService', () => {
  let service: NoteCritiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteCritiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
