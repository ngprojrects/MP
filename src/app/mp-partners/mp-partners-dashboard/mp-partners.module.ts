import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpPartnersDashboardComponent } from './mp-partners-dashboard.component';
import { MpPartnersDashboardRoutingModule } from './mp-partners-routing.module';
import { MpPartnersBlockComponent } from './mp-partners-block/mp-partners-block.component';

@NgModule({
    imports: [
        CommonModule,
        MpPartnersDashboardRoutingModule,

    ],
    declarations: [
        MpPartnersDashboardComponent, MpPartnersBlockComponent

    ]
})
export class MpPartnersModule { }
