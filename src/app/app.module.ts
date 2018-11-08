import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { GetInboxService } from './services/get-inbox.service';
import { HttpModule } from '@angular/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};




import { AppComponent } from './app.component';
import { MpRoutingModule } from './mp-routing.module';
import { MpLayoutComponent } from './mp-layout/mp-layout.component';
import { MpDashboardComponent } from './mp-home/mp-dashboard/mp-dashboard.component';
import { LoginTestComponent } from './login-test/login-test.component';
// import { ChartComponent } from './shared-components/chart/chart.component';
import { GraphicChartComponent } from './shared-components/graphic-chart/graphic-chart.component';
import { ChartModule } from 'angular-highcharts';
import { MpLayoutModule } from './mp-layout/mp-layout.module';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { AppInMemoryApiService } from './in-memory-api/app-in-memory-api.service';
import { environment } from '../environments/environment';
import { SharedComponentsModule } from './shared-components/shared-components/shared-components.module';
import { IconComponent } from './icon/icon.component';
import { IconDirective } from './icon.directive';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginTestComponent,
    IconComponent,
    IconDirective,
    //  GraphicChartComponent,
    // ChartComponent,

    // MpDashboardComponent
  ],
  imports: [
    BrowserModule,
    MpRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
    HttpModule

    // HttpClientInMemoryWebApiModule.forRoot(
    //   AppInMemoryApiService ),
    // ChartModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    GetInboxService, {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
