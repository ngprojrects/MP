import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() mTitle: string;
  @Input() mBodyValue: string;
  @Input() mFooter: string;
  @Input() mIcon: string;
  @Input() mSpans: string[];

  constructor() { }

  ngOnInit() {
  }
}
