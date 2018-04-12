import {RouterModule, Routes} from '@angular/router'

import { HomeComponent } from '../components/home/home.component'
import { CommunityComponent } from '../components/community/community.component'
import { HeadlinesComponent } from '../components/headlines/headlines.component'
import { ShoppingcarComponent } from '../components/shoppingcar/shoppingcar.component'
import { MineComponent } from '../components/mine/mine.component'

import { LoginComponent } from '../components/mine/login/login.component'
import { RegComponent } from '../components/mine/reg/reg.component'
import { PersonalComponent } from '../components/mine/personal/personal.component'


import {DetailsComponent} from '../components/details/details.component'
import {ConfirmComponent} from '../components/confirm/confirm.component'


import {PaymentComponent} from '../components/payment/payment.component'
import {SearchComponent} from '../components/details/search/search.component'
import {ZuixinComponent} from '../components/zuixin/zuixin.component'
const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent,
        children:[
            {path:'zuixin',component:ZuixinComponent}
        ]
    },
    {path: 'community',component: CommunityComponent},
    {path: 'headlines',component: HeadlinesComponent},
    {path: 'shoppingcar',component: ShoppingcarComponent},
    {path: 'mine',component: MineComponent},

    {path:'login',component:LoginComponent},
    {path:'reg',component:RegComponent},
    {path:'personal',component:PersonalComponent},

    {path: 'confirm',component: ConfirmComponent},
    {path: 'payment',component: PaymentComponent},
    {path: 'details/:id',component: DetailsComponent},
    {path: 'confirm',component: ConfirmComponent},

    {path: 'payment',component: PaymentComponent}


    {path: 'payment',component: PaymentComponent},
    {path: 'gamesearch',component: SearchComponent}
]

export const RootRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)