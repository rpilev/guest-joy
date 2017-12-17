import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OffersComponent } from './pages/offers/offers.component';
import { HeroComponent } from './ui-elements/hero/hero.component';
import { OffersListComponent } from './ui-elements/offers-list/offers-list.component';
import { OfferComponent } from './ui-elements/offers-list/offer/offer.component';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';

import { AppRoutingModule } from './app-routing.module';
import { OfferDetailsBoxComponent } from './ui-elements/offer-details-box/offer-details-box.component';

import { OffersService } from './offers.service';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HeroComponent,
    OffersListComponent,
    OfferComponent,
    OfferDetailsComponent,
    OfferDetailsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
