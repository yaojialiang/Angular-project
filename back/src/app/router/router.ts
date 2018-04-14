import {RouterModule, Routes} from '@angular/router'

import {HeroComponent} from '../components/hero/hero.component'
import {HerosComponent} from '../components/heros/heros.component'
import {GoodsComponent} from '../goods/goods.component'
import {LoginComponent} from '../login/login.component'
import {AppComponent} from '../app.component'
import {PopupComponent} from '../popup/popup.component'
import {AddgoodsComponent} from '../addgoods/addgoods.component'
import {UsersComponent} from '../users/users.component'
import {IndexComponent} from '../index/index.component'
const routes: Routes = [
    {path: '', component: LoginComponent},
	{path:'index',component:IndexComponent,children:[
		{
            path: 'goods', 
            component: GoodsComponent,
        },
        {
            path: 'addgoods',
            component: AddgoodsComponent,
        },
        {
            path: 'users',
            component: UsersComponent,
        }
	]},
    {path: 'hero', component: HeroComponent},
    {path: 'heros/:id/:name', component: HerosComponent},
    
    
    
]

export const AppRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)