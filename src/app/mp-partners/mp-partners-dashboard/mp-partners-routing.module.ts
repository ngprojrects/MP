import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpPartnersDashboardComponent } from './mp-partners-dashboard.component';

const routes: Routes = [
    {
        path: '', component: MpPartnersDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpPartnersDashboardRoutingModule { }
