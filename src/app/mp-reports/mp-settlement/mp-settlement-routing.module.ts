import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpSettlementComponent } from './mp-settlement.component';

const routes: Routes = [
    {
        path: '', component: MpSettlementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpSettlementdRoutingModule {}
