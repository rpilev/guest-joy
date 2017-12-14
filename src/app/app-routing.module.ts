import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersComponent } from './pages/offers/offers.component';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: OffersComponent
  },
  {
    path: ':theme',
    component: OffersComponent
  },
  {
    path: 'offer-details/:id',
    component: OfferDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}