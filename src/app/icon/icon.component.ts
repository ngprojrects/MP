import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  leem = [];
  // @Input() mBodyValue: string;
  // @Input() mFooter: string;
  // @Input() mIcon: string;
  // @Input() mSpans: string[];
  spanElements: number;

  constructor() { }

  ngOnInit() {
    this.addIcon(this.icon);
  }
  addIcon(icon) {
    // this.leem = new Array();
    // if (icon === 'mh-ic_mi_AverageTicket') {
    //   this.leem[9] = this.leem[0];


    // }
    console.log(icon)
  switch (icon) {
    case 'mh-ic_mi_AverageTicket':
    this.leem[10] = this.leem[0];
    console.log(this.leem)
      break;
    case 'mh-ic_mi_Business':
    this.leem[18] = this.leem[0];
      break;
    case 'mh-ic_mi_Chargebacks':
    this.leem[7] = this.leem[0];
      break;
    default:
    this.leem[0] = this.leem[0];
    }
  }
}
