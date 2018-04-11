import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';
import {HttpModule} from '@angular/http';
import {HttpclientService} from './services/httpclient.service'
import {SpringService} from './services/spring.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RangePipe } from './pipes/range.pipe';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { CommunityComponent } from './components/community/community.component';
import { ShoppingcarComponent } from './components/shoppingcar/shoppingcar.component';
import { MineComponent } from './components/mine/mine.component';
import { DetailsComponent } from './components/details/details.component';
import { RimComponent } from './src/app/component/rim/rim.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchComponent } from './components/details/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerCarComponent } from './components/spinner-car/spinner-car.component';


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
    DetailsComponent,
    RimComponent,
    ConfirmComponent,
    PaymentComponent,
    SearchComponent,
    SpinnerComponent,
    SpinnerCarComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    HttpModule
  ],
  providers: [HttpclientService,SpringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
