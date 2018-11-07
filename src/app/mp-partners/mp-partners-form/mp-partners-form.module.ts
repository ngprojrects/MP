import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MpPartnersFormComponent } from './mp-partners-form.component';
import { MpPartnersFormRoutingModule } from './mp-partners-form-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MpPartnersFormRoutingModule,

    ],
    declarations: [
        MpPartnersFormComponent,
    ]
})
export class MpPartnersFormModule { }
