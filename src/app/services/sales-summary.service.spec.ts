import { TestBed } from '@angular/core/testing';

import { SalesSummaryService } from './sales-summary.service';

describe('SalesSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesSummaryService = TestBed.get(SalesSummaryService);
    expect(service).toBeTruthy();
  });
});
