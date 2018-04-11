import {RouterModule, Routes} from '@angular/router'

import {HeroComponent} from '../components/hero/hero.component'
import {HerosComponent} from '../components/heros/heros.component'
import {GoodsComponent} from '../goods/goods.component'
import {LoginComponent} from '../login/login.component'
import {AppComponent} from '../app.component'
const routes: Routes = [
	{path:'',component:AppComponent,children:[
		{path: 'goods', component: GoodsComponent}
	]},
    {path: 'hero', component: HeroComponent},
    {path: 'heros/:id/:name', component: HerosComponent},
    
    {path: 'login', component: LoginComponent}
]

export const AppRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)