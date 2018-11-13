import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
