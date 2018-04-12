import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';
import {HttpModule} from '@angular/http';
import {HttpclientService} from './services/httpclient.service'
import {SpringService} from './services/spring.service'

// import {AppModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
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
import { SearchComponent } from './components/details/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerCarComponent } from './components/spinner-car/spinner-car.component';
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
    RegComponent,

    DetailsComponent,
    RimComponent,
    ConfirmComponent,
    PaymentComponent,
    ZuixinComponent,
    PersonalComponent,



    SearchComponent,
    SpinnerComponent,
    SpinnerCarComponent,
    ZuixinComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule,
    HttpModule
  ],
  providers: [HttpclientService,SpringService, 
    HttpModule,
    AppModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
