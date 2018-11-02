import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpFundingdRoutingModule } from './mp-funding-routing.module';
import { MpFundingComponent } from './mp-funding.component';
import { ChartComponent} from '../../shared-components/chart/chart.component';
import { SharedComponentsModule } from '../../shared-components/shared-components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,

        MpFundingdRoutingModule,
        SharedComponentsModule

    ],
    declarations: [
        // ChartComponent,
        MpFundingComponent,
    ]
})
export class MpFundingModule {}
