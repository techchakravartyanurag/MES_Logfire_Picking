import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemContainersPageRoutingModule } from './item-containers-routing.module';

import { ItemContainersPage } from './item-containers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemContainersPageRoutingModule
  ],
  declarations: [ItemContainersPage]
})
export class ItemContainersPageModule {}
