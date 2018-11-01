import { TestBed } from '@angular/core/testing';

import { VestiService } from './vesti.service';

describe('VestiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VestiService = TestBed.get(VestiService);
    expect(service).toBeTruthy();
  });
});
