import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpSummaryRoutingModule } from './mp-summary-routing.module';
import { MpSummaryComponent } from './mp-summary.component';
import { ChartComponent} from '../../shared-components/chart/chart.component';
import { GraphicChartComponent } from '../../shared-components/graphic-chart/graphic-chart.component';
import { ChartModule } from 'angular-highcharts';
import { SharedComponentsModule } from '../../shared-components/shared-components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        MpSummaryRoutingModule,
        ChartModule,
        SharedComponentsModule

    ],
    declarations: [
        MpSummaryComponent,
        // ChartComponent,
        GraphicChartComponent,

    ]
})
export class MpSummaryModule {}
