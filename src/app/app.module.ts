import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ProductsService } from './services/products.service';
import { ShopNowComponent } from './components/shop-now/shop-now.component';
import { BestDealsComponent } from './components/best-deals/best-deals.component';
import { ProductCardBigComponent } from './components/product-card-big/product-card-big.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { ProductCardSideComponent } from './components/product-card-side/product-card-side.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';
import { PartnerSliderComponent } from './components/partner-slider/partner-slider.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ShopNowComponent,
    ProductCardComponent,
    ProductCardBigComponent,
    ProductCardSideComponent,
    FeaturedProductsComponent,
    BestDealsComponent,
    BestsellersComponent,
    PromotionComponent,
    RecentlyViewedComponent,
    PartnerSliderComponent,
    ProductTypesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
