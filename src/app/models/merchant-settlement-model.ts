import {MerchantSettlementTender} from './tender-data';

export class MerchantSettlementModel {
  public visaCharges: number;
  public masterCardCharges: number;
  public americanExpressCharges: number;
  public discoverCharges: number;
  public debitCharges: number;
  public eBTCharges: number;
  public visaSumAuthAmount: number;
  public visaSumTipAmount: number;
  public visaSumCaptureAmount: number;
  public masterCardSumAuthAmount: number;
  public masterCardSumTipAmount: number;
  public masterCardSumCaptureAmount: number;
  public americanExpressSumAuthAmount: number;
  public americanExpressSumTipAmount: number;
  public americanExpressSumCaptureAmount: number;
  public discoverSumAuthAmount: number;
  public discoverSumTipAmount: number;
  public discoverSumCaptureAmount: number;
  public debitSumAuthAmount: number;
  public debitSumTipAmount: number;
  public debitSumCaptureAmount: number;
  public eBTSumAuthAmount: number;
  public eBTSumTipAmount: number;
  public eBTSumCaptureAmount: number;
  public tenderData: MerchantSettlementTender[];
}

export class MerchantSettlementAllReport {
  public merchantSettlementAllReport: MerchantSettlementModel;
}
