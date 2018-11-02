import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpDashboardRoutingModule } from './mp-dashboard-routing.module';
import { MpDashboardComponent } from './mp-dashboard.component';

@NgModule({
    imports: [
        CommonModule,

        MpDashboardRoutingModule,

    ],
    declarations: [
        MpDashboardComponent,
    ]
})
export class DashboardModule {}
