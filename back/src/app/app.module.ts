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
import { HttpclientService} from './services/httpclient.service';
import { PopupComponent } from './popup/popup.component';
import { ShadowComponent } from './shadow/shadow.component';
import { AddgoodsComponent } from './addgoods/addgoods.component';
import { UsersComponent } from './users/users.component';
import { IndexComponent } from './index/index.component';
import { UserpopupComponent } from './userpopup/userpopup.component'
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
    LoginComponent,
    PopupComponent,
    ShadowComponent,
    AddgoodsComponent,
    UsersComponent,
    IndexComponent,
    UserpopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouter,

  ],
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
