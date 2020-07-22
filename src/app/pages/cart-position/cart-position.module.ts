import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPositionPageRoutingModule } from './cart-position-routing.module';

import { CartPositionPage } from './cart-position.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPositionPageRoutingModule
  ],
  declarations: [CartPositionPage]
})
export class CartPositionPageModule {}
