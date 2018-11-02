import { TestBed } from '@angular/core/testing';

import { ReportSummaryService } from './report-summary.service';

describe('ReportSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportSummaryService = TestBed.get(ReportSummaryService);
    expect(service).toBeTruthy();
  });
});
