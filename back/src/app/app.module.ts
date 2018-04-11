import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { RangePipe } from './pipes/range.pipe';
import {AppRouter} from './router/router';
import { HeadComponent } from './home/head/head.component';
import { NavComponent } from './home/nav/nav.component';
import { GoodsComponent } from './goods/goods.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroComponent,
    RangePipe,
    HeadComponent,
    NavComponent,
    GoodsComponent,
    DatagridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
