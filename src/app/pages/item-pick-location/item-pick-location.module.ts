import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPickLocationPageRoutingModule } from './item-pick-location-routing.module';

import { ItemPickLocationPage } from './item-pick-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPickLocationPageRoutingModule
  ],
  declarations: [ItemPickLocationPage]
})
export class ItemPickLocationPageModule {}
