import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MpLayoutComponent } from './mp-layout.component';
import { MpDashboardComponent } from '../mp-home/mp-dashboard/mp-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: MpLayoutComponent,
        children: [
            // Home
            //**** Need to add  Page not found route here ******
            // { path:'**', redirectTo: 'home/dashboard', pathMatch: 'full' },
            { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
            // { path: 'home', redirectTo: 'home/dashboard', pathMatch: 'prefix' },
            { path: 'home/dashboard', loadChildren: '../mp-home/mp-dashboard/mp-dashboard.module#DashboardModule' },
            { path: 'home/my-account', loadChildren: '../mp-home/mp-myaccount/mp-myaccount.module#MpMyAccountdModule' },
            { path: 'home/location', loadChildren: '../mp-home/mp-location/mp-location.module#MpLocationdModule' },
            { path: 'home/users', loadChildren: '../mp-home/mp-users/mp-users.module#MpUsersModule' },

            // Messages
            { path: 'messages/inbox', loadChildren: '../mp-messages/mp-inbox/mp-messages.module#MessagesdModule' },
            { path: 'messages/archive', loadChildren: '../mp-messages/mp-archive/mp-archive.module#MpArchivedModule' },


            // Partners
            { path: 'partners/dashboard', loadChildren: '../mp-partners/mp-partners-dashboard/mp-partners.module#MpPartnersModule' },
            { path: 'partners/form', loadChildren: '../mp-partners/mp-partners-form/mp-partners-form.module#MpPartnersFormModule' },


            // Reports
            { path: 'reports/favorite', loadChildren: '../mp-reports/mp-favorites/mp-favorites.module#MpFavoritesModule' },
            { path: 'reports/card', loadChildren: '../mp-reports/mp-card/mp-card.module#MpCardModule' },
            { path: 'reports/settlement', loadChildren: '../mp-reports/mp-settlement/mp-settlement.module#MpSettlementModule' },
            { path: 'reports/funding', loadChildren: '../mp-reports/mp-funding/mp-funding.module#MpFundingModule' },

            // POS
            { path: 'point-of-sale/summary', loadChildren: '../mp-point-of-sale/mp-summary/mp-summary.module#MpSummaryModule' },
            // Market
            { path: 'market/on-the-market', loadChildren: '../mp-market/mp-onthemarket/mp-onthemarket.module#MpOnTheMarketModule' },
            { path: 'market/listings', loadChildren: '../mp-market/mp-listings/mp-listings.module#MpListingsModule' },
            { path: 'market/reputation', loadChildren: '../mp-market/mp-reputation/mp-reputation.module#MpReputationModule' },
            { path: 'market/social', loadChildren: '../mp-market/mp-social/mp-social.module#MpSocialModule' },
            { path: 'market/website', loadChildren: '../mp-market/mp-website/mp-website.module#MpWebsiteModule' },
            // Help
            // { path: 'help', loadChildren: '../mp-help/mp-help.module#MpHelpModule' },




        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpLayoutRoutingModule { }
