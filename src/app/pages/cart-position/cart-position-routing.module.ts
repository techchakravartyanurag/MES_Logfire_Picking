import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPositionPage } from './cart-position.page';

const routes: Routes = [
  {
    path: '',
    component: CartPositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPositionPageRoutingModule {}
