import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpSocialRoutingModule } from './mp-social-routing.module';
import { MpSocialComponent } from './mp-social.component';

@NgModule({
    imports: [
        CommonModule,

        MpSocialRoutingModule,

    ],
    declarations: [
        MpSocialComponent,
    ]
})
export class MpSocialModule {}
