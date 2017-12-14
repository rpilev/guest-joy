import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffersComponent } from './pages/offers/offers.component';
import { HeroComponent } from './ui-elements/hero/hero.component';
import { OffersListComponent } from './ui-elements/offers-list/offers-list.component';
import { OfferComponent } from './ui-elements/offers-list/offer/offer.component';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactBoxComponent } from './ui-elements/contact-box/contact-box.component';
import { OfferDetailsBoxComponent } from './ui-elements/offer-details-box/offer-details-box.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HeroComponent,
    OffersListComponent,
    OfferComponent,
    OfferDetailsComponent,
    ContactBoxComponent,
    OfferDetailsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
