import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSummaryPageRoutingModule } from './item-summary-routing.module';

import { ItemSummaryPage } from './item-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSummaryPageRoutingModule
  ],
  declarations: [ItemSummaryPage]
})
export class ItemSummaryPageModule {}
