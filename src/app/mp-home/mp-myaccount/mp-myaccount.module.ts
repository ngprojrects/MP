import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpMyAccountdRoutingModule } from './mp-myaccount-routing.module';
import { MpMyAccountComponent } from './mp-myaccount.component';

@NgModule({
    imports: [
        CommonModule,

        MpMyAccountdRoutingModule,

    ],
    declarations: [
        MpMyAccountComponent,
    ]
})
export class MpMyAccountdModule {}
