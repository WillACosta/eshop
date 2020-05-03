import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./core/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";

import { StoreModule } from "@ngrx/store";
import { ShopReducer } from "./store/reducers/cart.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ShopEffects } from "./store/effects/effects";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductCardComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 1200,
      closeButton: true,
      positionClass: "toast-bottom-right",
    }),
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
