import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpFavoritesRoutingModule } from './mp-favorites-routing.module';
import { MpFavoritesComponent } from './mp-favorites.component';

@NgModule({
    imports: [
        CommonModule,

        MpFavoritesRoutingModule,

    ],
    declarations: [
        MpFavoritesComponent,
    ]
})
export class MpFavoritesModule {}
