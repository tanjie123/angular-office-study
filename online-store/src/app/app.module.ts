import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductDetailComponent,
    CartComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
