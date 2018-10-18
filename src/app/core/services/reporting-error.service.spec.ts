import { TestBed } from '@angular/core/testing';

import { ReportingErrorService } from './reporting-error.service';

describe('ReportingErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportingErrorService = TestBed.get(ReportingErrorService);
    expect(service).toBeTruthy();
  });
});
