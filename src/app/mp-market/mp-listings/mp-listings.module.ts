import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpListingsRoutingModule } from './mp-listings-routing.module';
import { MpListingsComponent } from './mp-listings.component';

@NgModule({
    imports: [
        CommonModule,

        MpListingsRoutingModule,

    ],
    declarations: [
        MpListingsComponent,
    ]
})
export class MpListingsModule {}
