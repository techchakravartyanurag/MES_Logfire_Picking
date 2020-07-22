import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickCartPageRoutingModule } from './pick-cart-routing.module';

import { PickCartPage } from './pick-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickCartPageRoutingModule
  ],
  declarations: [PickCartPage]
})
export class PickCartPageModule {}
