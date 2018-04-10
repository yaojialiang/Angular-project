import {RouterModule, Routes} from '@angular/router'

import { HomeComponent } from '../components/home/home.component'
import { CommunityComponent } from '../components/community/community.component'
import { HeadlinesComponent } from '../components/headlines/headlines.component'
import { ShoppingcarComponent } from '../components/shoppingcar/shoppingcar.component'
import { MineComponent } from '../components/mine/mine.component'
import {DetailsComponent} from '../components/details/details.component'
import {ConfirmComponent} from '../components/confirm/confirm.component'

import {PaymentComponent} from '../components/payment/payment.component'

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'community',component: CommunityComponent},
    {path: 'headlines',component: HeadlinesComponent},
    {path: 'shoppingcar',component: ShoppingcarComponent},
    {path: 'mine',component: MineComponent},
    {path: 'details/:id',component: DetailsComponent},
    {path: 'confirm',component: ConfirmComponent},
    {path: 'payment',component: PaymentComponent}
]

export const RootRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)