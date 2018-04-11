import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';
import {FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RangePipe } from './pipes/range.pipe';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { CommunityComponent } from './components/community/community.component';
import { ShoppingcarComponent } from './components/shoppingcar/shoppingcar.component';
import { MineComponent } from './components/mine/mine.component';

import { LoginComponent } from './components/mine/login/login.component';
import { RegComponent } from './components/mine/reg/reg.component';


import { DetailsComponent } from './components/details/details.component';
import { RimComponent } from './src/app/component/rim/rim.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ZuixinComponent } from './components/zuixin/zuixin.component';
import { PersonalComponent } from './components/mine/personal/personal.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HighlightDirective,
    RangePipe,
    HeadlinesComponent,
    CommunityComponent,
    ShoppingcarComponent,
    MineComponent,

    LoginComponent,
    RegComponent

    DetailsComponent,
    RimComponent,
    ConfirmComponent,
    PaymentComponent,
    ZuixinComponent,
    PersonalComponent,


  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
