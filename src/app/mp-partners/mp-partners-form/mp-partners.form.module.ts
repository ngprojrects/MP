import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpPartnersDashboardComponent } from './mp-partners-dashboard.component';
import { MpPartnersDashboardRoutingModule } from './mp-partners-form-routing.module';

@NgModule({
    imports: [
        CommonModule,

        MpPartnersDashboardRoutingModule,

    ],
    declarations: [
        MpPartnersDashboardComponent,
    ]
})
export class MpPartnersModule { }
