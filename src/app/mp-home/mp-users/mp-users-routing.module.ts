import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpUsersComponent } from './mp-users.component';

const routes: Routes = [
    {
        path: '', component: MpUsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpUsersRoutingModule {}
