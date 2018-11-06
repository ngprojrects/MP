import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpPartnersFormComponent } from './mp-partners-form.component';

const routes: Routes = [
    {
        path: '', component: MpPartnersFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpPartnersFormRoutingModule { }
