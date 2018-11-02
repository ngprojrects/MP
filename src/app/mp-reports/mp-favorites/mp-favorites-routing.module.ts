import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpFavoritesComponent } from './mp-favorites.component';

const routes: Routes = [
    {
        path: '', component: MpFavoritesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpFavoritesRoutingModule {}
