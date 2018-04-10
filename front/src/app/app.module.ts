import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';
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
import { DetailsComponent } from './components/details/details.component';
import { RimComponent } from './src/app/component/rim/rim.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PaymentComponent } from './components/payment/payment.component';


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
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
