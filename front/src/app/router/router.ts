import {RouterModule, Routes} from '@angular/router'

import { HomeComponent } from '../components/home/home.component'
import { CommunityComponent } from '../components/community/community.component'
import { HeadlinesComponent } from '../components/headlines/headlines.component'
import { ShoppingcarComponent } from '../components/shoppingcar/shoppingcar.component'
import { MineComponent } from '../components/mine/mine.component'
import { LoginComponent } from '../components/mine/login/login.component'
import { RegComponent } from '../components/mine/reg/reg.component'


const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'community',component: CommunityComponent},
    {path: 'headlines',component: HeadlinesComponent},
    {path: 'shoppingcar',component: ShoppingcarComponent},
    {path: 'mine',component: MineComponent},
    {path:'login',component:LoginComponent},
    {path:'reg',component:RegComponent},
]

export const RootRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)