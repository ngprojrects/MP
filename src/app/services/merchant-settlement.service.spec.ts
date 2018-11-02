import { TestBed } from '@angular/core/testing';

import { MerchantSettlementService } from './merchant-settlement.service';

describe('MerchantSettlementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantSettlementService = TestBed.get(MerchantSettlementService);
    expect(service).toBeTruthy();
  });
});
