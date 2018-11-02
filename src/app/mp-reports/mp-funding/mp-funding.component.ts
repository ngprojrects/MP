import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Params} from '@angular/router';
import {CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import * as moment from 'moment';
// import {MerchantFundingModel} from '../../models/merchant-funding-model';
// import {MerchantFundingService} from '../../services/merchant-funding.service';




@Component({
  selector: 'app-mp-funding',
  templateUrl: './mp-funding.component.html',
  styleUrls: ['./mp-funding.component.css']
})
export class MpFundingComponent implements OnInit {



  constructor() {}

  ngOnInit() {
  }
  // fillMetricsObjectFromResponse() {
  //   this.metrics = [
  //     {
  //       title: 'VISA', body: this.currencyPipe.transform(this.merchantFundingModel.visaCharges, 'USD'),
  //       footer: this.decimalPipe.transform(this.merchantFundingModel.visaSumCaptureAmount, '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
  //     },
  //     {
  //       title: 'MASTERCARD', body: this.currencyPipe.transform(this.merchantFundingModel.masterCardCharges, 'USD'),
  //       footer: this.decimalPipe.transform(this.merchantFundingModel.masterCardSumCaptureAmount, '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: ['path1', 'path2', 'path3', 'path4', 'path5']
  //     },
  //     {
  //       title: 'AMERICAN EXPRESS', body: this.currencyPipe.transform(this.merchantFundingModel.americanExpressCharges, 'USD'),
  //       footer: this.decimalPipe.transform(this.merchantFundingModel.americanExpressSumCaptureAmount, '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
  //     },
  //     {
  //       title: 'DISCOVER', body: this.currencyPipe.transform(this.merchantFundingModel.discoverCharges, 'USD'),
  //       footer: this.decimalPipe.transform(this.merchantFundingModel.discoverSumCaptureAmount, '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: ['path1', 'path2']
  //     },
  //     {
  //       title: 'DEBIT', body: this.currencyPipe.transform(this.merchantFundingModel.debitCharges, 'USD'),
  //       footer: this.decimalPipe.transform(this.merchantFundingModel.debitSumCaptureAmount, '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: []
  //     },
  //     {
  //       title: 'TOTALS', body: this.currencyPipe.transform(this.calculateTotalChargedAmount(), 'USD'),
  //       footer: this.decimalPipe.transform(this.calculateTotalTransactions(), '1.0-0') + ' Transactions',
  //       icon: 'icon-ic_mi_trending', spans: []
  //     }
  //   ];
  // }

}
