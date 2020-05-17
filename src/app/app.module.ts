import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ProductModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
