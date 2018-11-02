export class TenderData {
    public merchantSettlementTender: MerchantSettlementTender[];
  }

  export class MerchantSettlementTender {
    public transactionTenderId: number;
    public posTransactionTime: Date;
    public localGatewayAuthDateTime: Date;
    public localGatewayCaptureDateTime: Date;
    public transactionNumber: string;
    public authAmount: number;
    public tipAmount: number;
    public captureAmount: number;
    public gatewayIdentifier: string;
    public gatewayAuthCode: string;
    public gatewayAVSResponse: string;
    public groupId: string;
    public gatewayGroupIdentifier: string;
    public terminalId: string;
    public last4: string;
    public cardBrand: string;
    public cardType: string;
    public inputMethod: string;
    public transactionType: string;
    public description: string;
    public transactionId: number;
    public tenderStatus: string;
    public address: string;
    public offlineCredit: string;
    public merchantId: string;
    public cNP: boolean;
    public fA: boolean;
  // public string CNPValue => CNP ? "CNP," : "";
  // public string FAValue => FA ? "FA" : "";
  }
