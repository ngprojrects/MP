import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpCardComponent } from './mp-card.component';

const routes: Routes = [
    {
        path: '', component: MpCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpCardRoutingModule {}
