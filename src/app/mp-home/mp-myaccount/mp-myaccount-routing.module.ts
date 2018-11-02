import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpMyAccountComponent } from './mp-myaccount.component';

const routes: Routes = [
    {
        path: '', component: MpMyAccountComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpMyAccountdRoutingModule {}
