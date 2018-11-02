import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpWebsiteComponent } from './mp-website.component';

const routes: Routes = [
    {
        path: '', component: MpWebsiteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpWebsiteRoutingModule {}
