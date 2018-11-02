import { Component, OnInit } from '@angular/core';
import {DatePipe, CurrencyPipe, PercentPipe, DecimalPipe} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

  // import {ReportsService} from '../../services/reports.service';
  // import {SalesSummaryModel} from '../../models/sales-summary-model';
 import * as moment from 'moment';


import { SalesSummaryModel } from '../../models/sales-summary-model';
import { SalesSummaryService} from '../../services/sales-summary.service';

export interface DateRange {
  value: string;
  viewValue: string;
}

export interface Metric {
  title: string;
  body: string;
  footer: string;
  icon: string;
}

export interface GraphicChart {
  title: string;
  type: string;
  toolTip: {};
  plotOptions: {};
  xAxis: {};
  yAxis: {};
  data: [{}];
}
@Component({
  selector: 'app-mp-summary',
  templateUrl: './mp-summary.component.html',
  styleUrls: ['./mp-summary.component.css']
})
export class MpSummaryComponent implements OnInit {

    metrics: Metric[];
    graphicChartLoaded: Promise<boolean>;
    graphicChartRange: GraphicChart;
    graphicChartDoW: GraphicChart;
    graphicChartToD: GraphicChart;
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
    endDateTime = new Date('2017-09-17T23:59:00' );
    startDateMax = this.startDateTime;
    endDateMin = this.endDateTime;

    rangeGraphicChartTitle: string;

    salesSummaryModel: SalesSummaryModel = new SalesSummaryModel();
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

    constructor(private  saleSummaryService: SalesSummaryService,
                private activatedRoute: ActivatedRoute,
                private datePipe: DatePipe,
                private currencyPipe: CurrencyPipe,
                private percentPipe: PercentPipe,
                private decimalPipe: DecimalPipe
    ) {}

    ngOnInit() {
      this.startDateTime.setDate(this.startDateTime.getDate() - 5);
      this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
        + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');

      this.activatedRoute.params.subscribe((params: Params) => {
        this.token = params['token'];
      });

      this.getSalesSummary();
    }

    onStartDatetimeChanged(datetime: Date): void {
      this.startDateTime = datetime;
      this.setDateRangeMinMax();

      this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
        + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
    }

    onEndDatetimeChanged(datetime: Date): void {
      this.endDateTime = datetime;
      this.setDateRangeMinMax();

      this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
        + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
    }

    getSalesSummary() {
      this.requestData.StartDate = this.datePipe.transform(this.startDateTime, 'yyyy-MM-ddThh:mm:ss');
      this.requestData.EndDate = this.datePipe.transform(this.endDateTime, 'yyyy-MM-ddThh:mm:ss');

      this.saleSummaryService.getSalesSummary(this.token, this.requestData)
        .subscribe(
          md => {
            this.salesSummaryModel = md;
            this.fillMetricsObjectFromResponse();
            this.fillDoWGraphicChart();
            this.fillToDGraphicChart();
            this.fillRangeGraphicChart();
            this.isWebLoaded = Promise.resolve(true);
          }
        );
    }
    fillMetricsObjectFromResponse() {
      this.metrics = [
        {
          title: 'SALES',
           body: this.currencyPipe.transform(this.salesSummaryModel.metrics.sales, 'USD'),
          footer: this.decimalPipe.transform(this.salesSummaryModel.metrics.transactions, '1.0-0') + ' Transactions',
          icon: 'lin-balance text-yellow'
        },
        {
          title: 'DISCOUNTS',
          body: '(' + this.currencyPipe.transform(this.salesSummaryModel.metrics.discounts, 'USD') + ')',
          footer: this.percentPipe.transform(this.salesSummaryModel.metrics.discountPercentage / 100, '1.2-2') + ' of Sales',
          icon: 'lin-tags text-red'
        },
        {
          title: 'NET SALES', body: this.currencyPipe.transform(this.salesSummaryModel.metrics.net, 'USD'),
          footer: this.currencyPipe.transform(this.salesSummaryModel.metrics.netAverage, 'USD') + ' Avg Net Sales',
          icon: 'lin-receipt-custom text-orange-im3'
        },
        {
          title: 'TAXES & FEES', body: this.currencyPipe.transform(this.salesSummaryModel.metrics.tax, 'USD'),
          footer: this.percentPipe.transform(this.salesSummaryModel.metrics.taxPercentage / 100, '1.2-2') + ' of Net Sales',
          icon: 'lin-percent text-pink'
        },
        {
          title: 'TIPS', body: this.currencyPipe.transform(this.salesSummaryModel.metrics.tips, 'USD'),
          footer: this.percentPipe.transform(this.salesSummaryModel.metrics.tipsPercentage / 100, '1.2-2') + ' of Net Sales',
          icon: 'lin-coin-dollar text-blue-light'
        },
        {
          title: 'TOTAL SALES', body: this.currencyPipe.transform(this.salesSummaryModel.metrics.total, 'USD'),
          footer: this.currencyPipe.transform(this.salesSummaryModel.metrics.totalAverage, 'USD') + ' Avg Total Sales',
          icon: 'lin-cash-generic text-green'
        }
      ];
    }

    fillRangeGraphicChart() {
      this.graphicChartRange = {
        title: this.rangeGraphicChartTitle,
        type: 'line',
        toolTip: {
          pointFormatter: function () {
            return '$ ' + this.y;
          }
        },
        plotOptions: {
          line: {
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            }
          }
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Net Sales'
          },
          labels: {
            formatter: function () {
              return '$' + this.value;
            }
          }
        },
        data: [
          {
            name: 'Net Sales',
            color: '#54bd84',
            data: this.settingGraphicChartRangeData()
          }
        ]
      };

      this.graphicChartLoaded = Promise.resolve(true);
    }

    settingGraphicChartRangeData() {
      const data = this.salesSummaryModel.daily;
      const res = [];
      for (const entry of data) {
        res.push([entry.key, entry.value]);
      }

      return res;
    }

    fillDoWGraphicChart() {
      console.log('DoW', );
      this.graphicChartDoW = {
        title: 'DAY OF WEEK',
        type: 'column',
        toolTip: {
          pointFormatter: function () {
            return '$ ' + this.y;
          }
        },
        plotOptions: {
          line: {
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            }
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Net Sales'
          },
          labels: {
            formatter: function () {
              return '$' + this.value;
            }
          }
        },
        data: [
          {
            name: 'Net Sales',
            color: '#54bd84',
            data: this.settingGraphicChartDoWData()
          }
        ]
      };

      this.graphicChartLoaded = Promise.resolve(true);
    }

    settingGraphicChartDoWData() {
      const data = this.salesSummaryModel.weekday;
      const res = [];
      for (const entry of data) {
        res.push([entry.key, entry.value]);
      }

      return res;
    }

    fillToDGraphicChart() {
      this.graphicChartToD = {
        title: 'TIME OF DAY',
        type: 'line',
        toolTip: {
          pointFormatter: function () {
            return '$ ' + this.y;
          }
        },
        plotOptions: {
          line: {
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            }
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Net Sales'
          },
          labels: {
            formatter: function () {
              return '$' + this.value;
            }
          }
        },
        data: [
          {
            name: 'Net Sales',
            color: '#54bd84',
            data: this.settingGraphicChartToDData()
          }
        ]
      };

      this.graphicChartLoaded = Promise.resolve(true);
    }

    settingGraphicChartToDData() {
      const data = this.salesSummaryModel.hour;
      const res = [];
      for (const entry of data) {
        res.push([entry.key, entry.value]);
      }

      return res;
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
              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case '-1': {
              // Yesterday
              this.startDateTime = new Date(new Date().setDate(today.getDate() - 1));
              this.endDateTime = today;
              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case '-30': {
              // Last 30 days
              this.startDateTime = new Date(new Date().setDate(today.getDate() - 30));
              this.endDateTime = today;
              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'week': {
              // This week
              this.startDateTime = now.startOf('week').toDate();
              this.endDateTime = now.endOf('week').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'lastWeek': {
              // Last week
              this.startDateTime = now.startOf('week').subtract(1, 'week' ).toDate();
              this.endDateTime = now.endOf('week').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'month': {
              // This month
              this.startDateTime = now.startOf('month').toDate();
              this.endDateTime = now.endOf('month').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'lastMonth': {
              // Last month
              this.startDateTime = now.startOf('month').subtract(1, 'month' ).toDate();
              this.endDateTime = now.endOf('month').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'year': {
              // This year
              this.startDateTime = now.startOf('year').toDate();
              this.endDateTime = now.endOf('year').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            case 'lastYear': {
              // Last year
              this.startDateTime = now.startOf('year').subtract(1, 'year' ).toDate();
              this.endDateTime = now.endOf('year').toDate();

              this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
              break;
            }
            default: {
                // Last 7 days
                this.startDateTime = new Date(new Date().setDate(today.getDate() - 7));
                this.endDateTime = today;
                this.rangeGraphicChartTitle = this.datePipe.transform(this.startDateTime, 'MM/dd/yyy hh:mm a')
                  + ' - ' + this.datePipe.transform(this.endDateTime, 'MM/dd/yyy hh:mm a');
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
  }
