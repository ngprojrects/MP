import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpOnTheMarketRoutingModule } from './mp-onthemarket-routing.module';
import { MpOnTheMarketComponent } from './mp-onthermarket.component';

@NgModule({
    imports: [
        CommonModule,

        MpOnTheMarketRoutingModule,

    ],
    declarations: [
        MpOnTheMarketComponent,
    ]
})
export class MpOnTheMarketModule {}
