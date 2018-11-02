import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpReputationComponent } from './mp-reputation.component';

const routes: Routes = [
    {
        path: '', component: MpReputationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpReputationRoutingModule {}
