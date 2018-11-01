import { TestBed } from '@angular/core/testing';

import { IstorijatService } from './istorijat.service';

describe('IstorijatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IstorijatService = TestBed.get(IstorijatService);
    expect(service).toBeTruthy();
  });
});
