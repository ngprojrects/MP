import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpArchiveComponent } from './mp-archive.component';

const routes: Routes = [
    {
        path: '', component: MpArchiveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpArchivedRoutingModule {}
