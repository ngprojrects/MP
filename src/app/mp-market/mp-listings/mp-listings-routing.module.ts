import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpListingsComponent } from './mp-listings.component';

const routes: Routes = [
    {
        path: '', component: MpListingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpListingsRoutingModule {}
