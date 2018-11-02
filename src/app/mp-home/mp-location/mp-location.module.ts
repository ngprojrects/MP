import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpLocationdRoutingModule } from './mp-location-routing.module';
import { MpLocationComponent } from './mp-location.component';

@NgModule({
    imports: [
        CommonModule,

        MpLocationdRoutingModule,

    ],
    declarations: [
        MpLocationComponent,
    ]
})
export class MpLocationdModule {}
