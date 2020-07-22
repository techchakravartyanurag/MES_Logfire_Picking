import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPickLocationPage } from './item-pick-location.page';

const routes: Routes = [
  {
    path: '',
    component: ItemPickLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemPickLocationPageRoutingModule {}
