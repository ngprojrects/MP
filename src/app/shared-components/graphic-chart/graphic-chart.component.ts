import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-graphic-chart',
  templateUrl: './graphic-chart.component.html',
  styleUrls: ['./graphic-chart.component.css']
})
export class GraphicChartComponent implements OnInit, OnChanges {

  // @Input() webLoaded: Promise<boolean>;
  @Input() title: string;
  @Input() type: string;
  @Input() toolTip = {};
  @Input() plotOptions = {};
  @Input() xAxis = { title: { text: 'Fruit Number' }, tickInterval: 1 };
  @Input() yAxis = { title: { text: 'Fruit eaten' }, tickInterval: 1 };
  @Input() data = [{ data: [1, 2, 3] } ];
  chart: any;

  constructor() { }

  ngOnInit() {
    this.loadingData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data !== undefined) {
      this.data = changes.data.currentValue;
      this.loadingData();
    }
  }

  loadingData() {
    this.chart = new Chart({
      chart: {
        type: this.type,
        renderTo: 'container',
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      plotOptions: this.plotOptions,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      tooltip: this.toolTip,
      series: this.data
    });
  }
}
