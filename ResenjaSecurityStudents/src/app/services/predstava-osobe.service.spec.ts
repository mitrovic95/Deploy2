import { TestBed } from '@angular/core/testing';

import { PredstavaOsobeService } from './predstava-osobe.service';

describe('PredstavaOsobeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredstavaOsobeService = TestBed.get(PredstavaOsobeService);
    expect(service).toBeTruthy();
  });
});
