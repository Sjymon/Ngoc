import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
