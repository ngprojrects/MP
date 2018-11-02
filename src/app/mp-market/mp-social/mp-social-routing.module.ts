import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpSocialComponent } from './mp-social.component';

const routes: Routes = [
    {
        path: '', component: MpSocialComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpSocialRoutingModule {}
