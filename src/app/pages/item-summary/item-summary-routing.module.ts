import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSummaryPage } from './item-summary.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSummaryPageRoutingModule {}
