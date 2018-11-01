import { TestBed } from '@angular/core/testing';

import { RepertoarService } from './repertoar.service';

describe('RepertoarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepertoarService = TestBed.get(RepertoarService);
    expect(service).toBeTruthy();
  });
});
