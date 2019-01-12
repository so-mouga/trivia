import { TestBed } from '@angular/core/testing';

import { OpentdbService } from './opentdb.service';

describe('OpentdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpentdbService = TestBed.get(OpentdbService);
    expect(service).toBeTruthy();
  });
});
