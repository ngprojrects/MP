import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginTestComponent} from './login-test/login-test.component';

import { MpLayoutComponent} from './mp-layout/mp-layout.component'
// import { MpDashboardComponent } from './mp-home/mp-dashboard/mp-dashboard.component';


import { AppComponent } from './app.component';
import { AuthGuardService } from './Auth/auth-guard.service';

const routes: Routes = [
    { path: '', loadChildren: './mp-layout/mp-layout.module#MpLayoutModule', canActivate: [AuthGuardService]},
    { path: 'login', component: LoginTestComponent }
    // {path: '', component: MpDashboardComponent}
    ];


@NgModule({
  exports: [ RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class MpRoutingModule { }






