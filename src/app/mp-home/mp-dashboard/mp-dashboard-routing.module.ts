import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpDashboardComponent } from './mp-dashboard.component';

const routes: Routes = [
    {
        path: '', component: MpDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpDashboardRoutingModule {}
