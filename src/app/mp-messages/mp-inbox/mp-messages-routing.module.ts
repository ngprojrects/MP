import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpMessagesComponent } from './mp-messages.component';

const routes: Routes = [
    {
        path: '', component: MpMessagesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpMessagesdRoutingModule {}
