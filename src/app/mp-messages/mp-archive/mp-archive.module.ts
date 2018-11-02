import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpArchivedRoutingModule } from './mp-archive-routing.module';
import { MpArchiveComponent } from './mp-archive.component';

@NgModule({
    imports: [
        CommonModule,

        MpArchivedRoutingModule,

    ],
    declarations: [
        MpArchiveComponent,
    ]
})
export class MpArchivedModule {}
