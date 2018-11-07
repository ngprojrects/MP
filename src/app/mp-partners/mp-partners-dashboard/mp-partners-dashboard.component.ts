import { Component, OnInit } from '@angular/core';
import { Block } from '../../models/block';
import { Partner } from 'src/app/models/partner';
@Component({
  selector: 'app-mp-partners-dashboard',
  templateUrl: './mp-partners-dashboard.component.html',
  styleUrls: ['./mp-partners-dashboard.component.css']
})
export class MpPartnersDashboardComponent implements OnInit {

  constructor() { }
  blockList: Block[];
  ngOnInit() {
    // if (this.partnersList !== null && this.partnersList !== undefined) {
    //   this.partnersList = new Partner();
    // }
    this.blockList = [{
      itemName: 'Partners',
      imagePath: '/src/assets/images/baseline_account_balance_black_18dp.png',
      totalCount: 8,
      activeCount: 7
    },
    {
      itemName: 'Agencies',
      imagePath: '/src/assets/images/baseline_location_city_black_18dp.png',
      totalCount: 86,
      activeCount: 98
    },
    {
      itemName: 'Accounts',
      imagePath: '/src/assets/images/baseline_widgets_black_18dp.png',
      totalCount: 49,
      activeCount: 47
    },
    {
      itemName: 'Locations',
      imagePath: '/src/assets/images/baseline_room_black_18dp.png',
      totalCount: 1307,
      activeCount: 49
    }
    ];

    // const storedValue = localStorage.getItem('new');
    // if (storedValue !== null || storedValue !== undefined) {
    //   const valueArray = storedValue.split(',');
    //   this.partnersList.push({
    //     name: valueArray[0],
    //     brand: valueArray[1],
    //     streetAddress: valueArray[2],
    //     city: valueArray[3],
    //     country: valueArray[4],
    //     state: valueArray[5],
    //     postalCode: valueArray[6],
    //     phoneNumber: valueArray[7],
    //     websiteUrl: valueArray[8]
    //   });
  }
}




}

