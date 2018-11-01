import { TestBed } from '@angular/core/testing';

import { PredstaveService } from './predstave.service';

describe('PredstaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredstaveService = TestBed.get(PredstaveService);
    expect(service).toBeTruthy();
  });
});
