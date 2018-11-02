import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpFundingComponent } from './mp-funding.component';

const routes: Routes = [
    {
        path: '', component: MpFundingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpFundingdRoutingModule {}
