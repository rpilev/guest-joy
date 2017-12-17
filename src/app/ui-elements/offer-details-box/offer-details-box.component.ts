import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offers-list/offer/offer.model';

@Component({
  selector: 'app-offer-details-box',
  templateUrl: './offer-details-box.component.html',
  styleUrls: ['./offer-details-box.component.scss']
})
export class OfferDetailsBoxComponent implements OnInit {

  @Input() offer: Offer;
  @Input() offer_index;
  @Input('theme') theme;
  quantities: number[] = [];

  constructor() { }

  ngOnInit() {
    for(let i=1;i<this.offer.quantity_available-1;i++) {
      this.quantities.push(i);
    }
  }

}
