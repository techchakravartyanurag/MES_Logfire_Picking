import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/pickCart',
    pathMatch: 'full'
  },
  {
    path: 'pages/:id',
    loadChildren: () => import('./pages/pick-cart/pick-cart.module').then(m => m.PickCartPageModule)
  },
  {
    path: 'folder/pickCart',
    loadChildren: () => import('./pages/pick-cart/pick-cart.module').then(m => m.PickCartPageModule)
  },

  {
    path: 'pages/pickCart',
    loadChildren: () => import('./pages/pick-cart/pick-cart.module').then(m => m.PickCartPageModule)
  },
  {
    path: 'pages/pickCart/cartPosition',
    loadChildren: () => import('./pages/cart-position/cart-position.module').then(m => m.CartPositionPageModule)
  },
  {
    path: 'folder/pickCart/cartPosition',
    loadChildren: () => import('./pages/cart-position/cart-position.module').then(m => m.CartPositionPageModule)
  },
  {
    path: 'folder/pickCart/cartPosition/itemPickLocation',
    loadChildren: () => import('./pages/item-pick-location/item-pick-location.module').then(m => m.ItemPickLocationPageModule)
  },
  {
    path: 'folder/pickCart/cartPosition/itemPickLocation/itemContainers',
    loadChildren: () => import('./pages/item-containers/item-containers.module').then(m => m.ItemContainersPageModule)
  },
  {
    path: 'folder/pickCart/cartPosition/itemPickLocation/itemContainers/itemSummary',
    loadChildren: () => import('./pages/item-summary/item-summary.module').then(m => m.ItemSummaryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
