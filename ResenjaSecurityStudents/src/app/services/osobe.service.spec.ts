import { TestBed } from '@angular/core/testing';

import { OsobeService } from './osobe.service';

describe('OsobeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsobeService = TestBed.get(OsobeService);
    expect(service).toBeTruthy();
  });
});
