import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpOnTheMarketComponent } from './mp-onthermarket.component';

const routes: Routes = [
    {
        path: '', component: MpOnTheMarketComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpOnTheMarketRoutingModule {}
