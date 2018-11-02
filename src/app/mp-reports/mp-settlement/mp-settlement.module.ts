import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpSettlementdRoutingModule } from './mp-settlement-routing.module';
import { MpSettlementComponent } from './mp-settlement.component';
import { ChartComponent} from '../../shared-components/chart/chart.component';
import { SharedComponentsModule } from '../../shared-components/shared-components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,

        MpSettlementdRoutingModule,
        SharedComponentsModule

    ],
    declarations: [
        // ChartComponent,
        MpSettlementComponent,
    ]
})
export class MpSettlementModule {}
