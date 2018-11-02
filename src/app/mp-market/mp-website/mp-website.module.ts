import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpWebsiteRoutingModule } from './mp-website-routing.module';
import { MpWebsiteComponent } from './mp-website.component';

@NgModule({
    imports: [
        CommonModule,

        MpWebsiteRoutingModule,

    ],
    declarations: [
        MpWebsiteComponent,
    ]
})
export class MpWebsiteModule {}
