import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mp-card',
  templateUrl: './mp-card.component.html',
  styleUrls: ['./mp-card.component.css']
})
export class MpCardComponent implements OnInit {
  metrics: any[] = [];

  constructor() { }

  ngOnInit() {
    this.fillMetricsObjectFromResponse()
  }
  fillMetricsObjectFromResponse() {
    this.metrics = [
      {
        title: '',
        body: 'AUTHORIZATION SUMMARY',
        footer: '',
        icon: 'icon-ic_mi_trending'
      },
      {
        title: '',
        body: 'AUTHORIZATIONS',
        footer: '',
        icon: 'icon-ic_mi_trending'
      },
      {
        title: '',
        body: 'HOST OPEN BATCH',
        footer: '',
        icon: 'icon-ic_mi_trending'
      },
      {
        title: '',
        body: 'AUTHORIZATIONS BY CARD TYPE',
        footer: '',
        icon: 'icon-ic_mi_trending'
      }

    ];
  }

}
