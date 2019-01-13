import { TestBed } from '@angular/core/testing';

import { Lp1Service } from './lp1.service';

describe('Lp1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lp1Service = TestBed.get(Lp1Service);
    expect(service).toBeTruthy();
  });
});
