import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpSummaryComponent } from './mp-summary.component';

const routes: Routes = [
    {
        path: '', component: MpSummaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpSummaryRoutingModule {}
