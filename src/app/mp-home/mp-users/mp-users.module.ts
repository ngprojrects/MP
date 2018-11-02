import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpUsersRoutingModule } from './mp-users-routing.module';
import { MpUsersComponent } from './mp-users.component';

@NgModule({
    imports: [
        CommonModule,

        MpUsersRoutingModule,

    ],
    declarations: [
        MpUsersComponent,
    ]
})
export class MpUsersModule {}
