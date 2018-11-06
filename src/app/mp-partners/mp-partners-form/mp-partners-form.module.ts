import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpPartnersFormComponent } from './mp-partners-form.component';
import { MpPartnersFormRoutingModule } from './mp-partners-form-routing.module';

@NgModule({
    imports: [
        CommonModule,

        MpPartnersFormRoutingModule,

    ],
    declarations: [
        MpPartnersFormComponent,
    ]
})
export class MpPartnersModule { }
