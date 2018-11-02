import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Params} from '@angular/router';
import {CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import * as moment from 'moment';
import {MerchantSettlementModel} from '../../models/merchant-settlement-model';
import {MerchantSettlementService} from '../../services/merchant-settlement.service';


export interface DateRange {
  value: string;
  viewValue: string;
}

export interface Metric {
  title: string;
  body: string;
  footer: string;
  icon: string;
  spans: string[];
}

export interface TableData {
  posDate: string;
  orderNum: string;

  authDate: string;
  captureDate: string;

  gatewayId: string;
  groupId: string;

  avsResp: string;
  description: string;

  authAmt: string;
  tipAmt: string;

  captureAmt: string;

  brand: string;
  last4: string;

  type: string;
  method: string;
  status: string;
}


@Component({
  selector: 'app-mp-settlement',
  templateUrl: './mp-settlement.component.html',
  styleUrls: ['./mp-settlement.component.css']
})
export class MpSettlementComponent implements OnInit {

  tData: TableData[];

  displayedColumns: string[] = ['posDate', 'authDate', 'gatewayId',
    'avsResp', 'authAmt', 'captureAmt', 'brand', 'type', 'method', 'status'];
  // dataSource = new MatTableDataSource(this.tData);

  metrics: Metric[];
  token: string;
  isWebLoaded: Promise<boolean>;

  ranges: DateRange[] = [
    {value: '0', viewValue: 'Today'},
    {value: '-1', viewValue: 'Yesterday'},
    {value: '-7', viewValue: 'Last 7 Days'},
    {value: '-30', viewValue: 'Last 30 Days'},
    {value: 'week', viewValue: 'This Week'},
    {value: 'lastWeek', viewValue: 'Last Week'},
    {value: 'month', viewValue: 'This Month'},
    {value: 'lastMonth', viewValue: 'Last Month'},
    {value: 'year', viewValue: 'This Year'},
    {value: 'lastYear', viewValue: 'Last Year'}
  ];

  dateTimePickerPlaceHolderStart = 'Start datetime';
  dateTimePickerPlaceHolderEnd = 'End datetime';
  startDateTime = new Date('2017-01-19T00:00:00' );
  endDateTime = new Date('2018-09-17T23:59:00' );
  startDateMax = this.startDateTime;
  endDateMin = this.endDateTime;

  merchantSettlementModel: MerchantSettlementModel = new MerchantSettlementModel();
  requestData = {
    StartDate: this.startDateTime.toDateString(),
    EndDate: this.endDateTime.toDateString(),
    RegisterId: null,
    RegisterName: null,
    PrimaryUserId: null,
    Cursor: null,
    ExportTypeId: 0,
    ReportTypeId: 0,
    MonthStartDate: null,
    ExportButton: 0,
    CategoryName: null,
    CategoryIds: null,
    SortColumn: null,
    SortDirection: null
  };

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private  merchantSettlementService: MerchantSettlementService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private currencyPipe: CurrencyPipe,
              private percentPipe: PercentPipe,
              private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.startDateTime.setDate(this.startDateTime.getDate() - 5);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.token = params['token'];
    });

    this.getMerchantSettlement();
  }

  onStartDatetimeChanged(datetime: Date): void {
    this.startDateTime = datetime;
    this.setDateRangeMinMax();
  }

  onEndDatetimeChanged(datetime: Date): void {
    this.endDateTime = datetime;
    this.setDateRangeMinMax();
  }

  getMerchantSettlement() {
    this.requestData.StartDate = this.datePipe.transform(this.startDateTime, 'yyyy-MM-ddThh:mm:ss');
    this.requestData.EndDate = this.datePipe.transform(this.endDateTime, 'yyyy-MM-ddThh:mm:ss');

    this.merchantSettlementService.getMerchantSettlement(this.token, this.requestData)
      .subscribe(
        md => {
          this.merchantSettlementModel = md.merchantSettlementAllReport;
          this.fillMetricsObjectFromResponse();
          this.fillTableData();
          this.isWebLoaded = Promise.resolve(true);
          // this.dataSource.sort = this.sort;
        }
      );
  }

  fillMetricsObjectFromResponse() {
    this.metrics = [
      {
        title: 'VISA', body: this.currencyPipe.transform(this.merchantSettlementModel.visaCharges, 'USD'),
        footer: this.decimalPipe.transform(this.merchantSettlementModel.visaSumCaptureAmount, '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
      },
      {
        title: 'MASTERCARD', body: this.currencyPipe.transform(this.merchantSettlementModel.masterCardCharges, 'USD'),
        footer: this.decimalPipe.transform(this.merchantSettlementModel.masterCardSumCaptureAmount, '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: ['path1', 'path2', 'path3', 'path4', 'path5']
      },
      {
        title: 'AMERICAN EXPRESS', body: this.currencyPipe.transform(this.merchantSettlementModel.americanExpressCharges, 'USD'),
        footer: this.decimalPipe.transform(this.merchantSettlementModel.americanExpressSumCaptureAmount, '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
      },
      {
        title: 'DISCOVER', body: this.currencyPipe.transform(this.merchantSettlementModel.discoverCharges, 'USD'),
        footer: this.decimalPipe.transform(this.merchantSettlementModel.discoverSumCaptureAmount, '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
      },
      {
        title: 'DEBIT', body: this.currencyPipe.transform(this.merchantSettlementModel.debitCharges, 'USD'),
        footer: this.decimalPipe.transform(this.merchantSettlementModel.debitSumCaptureAmount, '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: []
      },
      {
        title: 'TOTALS', body: this.currencyPipe.transform(this.calculateTotalChargedAmount(), 'USD'),
        footer: this.decimalPipe.transform(this.calculateTotalTransactions(), '1.0-0') + ' Transactions',
        icon: 'icon-ic_mi_trending', spans: []
      }
    ];
  }

  calculateTotalChargedAmount() {
    return this.merchantSettlementModel.visaCharges +
     this.merchantSettlementModel.masterCardCharges +
     this.merchantSettlementModel.americanExpressCharges +
     this.merchantSettlementModel.discoverCharges +
     this.merchantSettlementModel.debitCharges;
  }

  calculateTotalTransactions() {
    return this.merchantSettlementModel.visaSumCaptureAmount +
      this.merchantSettlementModel.masterCardSumCaptureAmount +
      this.merchantSettlementModel.americanExpressSumCaptureAmount +
      this.merchantSettlementModel.discoverSumCaptureAmount +
      this.merchantSettlementModel.debitSumCaptureAmount;
  }

  onPredefinedRange(event) {
    if (event.isUserInput) {
      const today = new Date();
      const now = moment();

      switch (event.source.value) {
        case '0': {
          // Today
          this.startDateTime = today;
          this.endDateTime = today;
          break;
        }
        case '-1': {
          // Yesterday
          this.startDateTime = new Date(new Date().setDate(today.getDate() - 1));
          this.endDateTime = today;
          break;
        }
        case '-30': {
          // Last 30 days
          this.startDateTime = new Date(new Date().setDate(today.getDate() - 30));
          this.endDateTime = today;
          break;
        }
        case 'week': {
          // This week
          this.startDateTime = now.startOf('week').toDate();
          this.endDateTime = now.endOf('week').toDate();
          break;
        }
        case 'lastWeek': {
          // Last week
          this.startDateTime = now.startOf('week').subtract(1, 'week' ).toDate();
          this.endDateTime = now.endOf('week').toDate();
          break;
        }
        case 'month': {
          // This month
          this.startDateTime = now.startOf('month').toDate();
          this.endDateTime = now.endOf('month').toDate();
          break;
        }
        case 'lastMonth': {
          // Last month
          this.startDateTime = now.startOf('month').subtract(1, 'month' ).toDate();
          this.endDateTime = now.endOf('month').toDate();
          break;
        }
        case 'year': {
          // This year
          this.startDateTime = now.startOf('year').toDate();
          this.endDateTime = now.endOf('year').toDate();
          break;
        }
        case 'lastYear': {
          // Last year
          this.startDateTime = now.startOf('year').subtract(1, 'year' ).toDate();
          this.endDateTime = now.endOf('year').toDate();
          break;
        }
        default: {
          // Last 7 days
          this.startDateTime = new Date(new Date().setDate(today.getDate() - 7));
          this.endDateTime = today;
          break;
        }
      }

      this.setDateRangeMinMax();
    }
  }

  setDateRangeMinMax() {
    this.startDateMax = this.endDateTime;
    this.endDateMin = this.startDateTime;
  }

  fillTableData() {
    this.tData = [];
    for (const entry of this.merchantSettlementModel.tenderData) {
      this.tData.push(
        {
          posDate: (entry.posTransactionTime !== null) ? this.datePipe.transform(entry.posTransactionTime, 'short') : null,
          orderNum: (entry.transactionNumber !== null) ? this.decimalPipe.transform(entry.transactionNumber, '1.0-0') : null,
          authDate: (entry.localGatewayAuthDateTime !== null) ? this.datePipe.transform(entry.localGatewayAuthDateTime, 'short')
            : null,
          captureDate: (entry.localGatewayCaptureDateTime !== null) ? this.datePipe.transform(entry.localGatewayCaptureDateTime, 'short')
            : null,
          gatewayId: (entry.gatewayIdentifier !== null) ? this.decimalPipe.transform(entry.gatewayIdentifier, '1.0-0') : null,
          groupId: (entry.groupId !== null) ? this.decimalPipe.transform(entry.groupId, '1.0-0') : null,
          avsResp:  entry.gatewayAVSResponse,
          description:  entry.description,
          authAmt: (entry.authAmount !== null) ? this.currencyPipe.transform(entry.authAmount, 'USD') : null,
          tipAmt: (entry.tipAmount !== null) ? this.currencyPipe.transform(entry.tipAmount, 'USD') : null,
          captureAmt: (entry.captureAmount !== null) ? this.currencyPipe.transform(entry.captureAmount, 'USD') : null,
          brand:  entry.cardBrand,
          last4:  entry.last4,
          type:  entry.cardType,
          method:  entry.inputMethod,
          status:  entry.tenderStatus,
        }
      );
    }

    // this.dataSource = new MatTableDataSource(this.tData);
  }
}
