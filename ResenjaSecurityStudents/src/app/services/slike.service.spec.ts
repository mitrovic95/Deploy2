import { TestBed } from '@angular/core/testing';

import { SlikeService } from './slike.service';

describe('SlikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlikeService = TestBed.get(SlikeService);
    expect(service).toBeTruthy();
  });
});
