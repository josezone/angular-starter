import { TestBed } from '@angular/core/testing';

import { SwUpdatesService } from './sw-updates.service';

describe('SwUpdatesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwUpdatesService = TestBed.get(SwUpdatesService);
    expect(service).toBeTruthy();
  });
});
