import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouter } from './router/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RangePipe } from './pipes/range.pipe';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { CommunityComponent } from './components/community/community.component';
import { ShoppingcarComponent } from './components/shoppingcar/shoppingcar.component';
import { MineComponent } from './components/mine/mine.component';


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
    MineComponent
  ],
  imports: [
    BrowserModule,
    RootRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
