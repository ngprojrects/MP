import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpReputationRoutingModule } from './mp-reputation-routing.module';
import { MpReputationComponent } from './mp-reputation.component';

@NgModule({
    imports: [
        CommonModule,

        MpReputationRoutingModule,

    ],
    declarations: [
        MpReputationComponent,
    ]
})
export class MpReputationModule {}
