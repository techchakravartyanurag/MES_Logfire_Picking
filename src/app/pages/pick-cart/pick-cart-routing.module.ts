import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickCartPage } from './pick-cart.page';

const routes: Routes = [
  {
    path: '',
    component: PickCartPage
  },
  {
    path: '../pages/pickCart/cartPosition',
    loadChildren: () => import('../cart-position/cart-position.module').then( m => m.CartPositionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickCartPageRoutingModule {}
