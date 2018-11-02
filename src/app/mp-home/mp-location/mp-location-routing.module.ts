import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpLocationComponent } from './mp-location.component';

const routes: Routes = [
    {
        path: '', component: MpLocationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpLocationdRoutingModule {}
