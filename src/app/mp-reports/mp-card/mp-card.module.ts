import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpCardRoutingModule } from './mp-card-routing.module';
import { MpCardComponent } from './mp-card.component';
import { SharedComponentsModule } from '../../shared-components/shared-components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,

        MpCardRoutingModule,
        SharedComponentsModule

    ],
    declarations: [
        MpCardComponent,
    ]
})
export class MpCardModule {}
