import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpLayoutRoutingModule } from './mp-layout-routing.module';
import { MpLayoutComponent } from './mp-layout.component';
import { MpSidebarComponent } from './mp-maincomponents/mp-sidebar/mp-sidebar.component';


@NgModule({
    imports: [
        CommonModule,
        MpLayoutRoutingModule,
    ],
    declarations: [
        MpLayoutComponent,
        MpSidebarComponent,

    ]
})
export class MpLayoutModule {}
