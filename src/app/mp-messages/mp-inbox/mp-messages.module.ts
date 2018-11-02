import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { MpMessagesdRoutingModule } from './mp-messages-routing.module';
import { MpMessagesComponent } from './mp-messages.component';

@NgModule({ 
    imports: [
        CommonModule,

        MpMessagesdRoutingModule,PerfectScrollbarModule,

    ],
    declarations: [
        MpMessagesComponent,
    ]
})
export class MessagesdModule {}

