import { Component, OnInit, Input } from '@angular/core';

import { Offer } from './offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input('data') offer: Offer;
  @Input() theme: string;
  theme_name_for_url: string;
  @Input() index: number;
  @Input() compact_offer: boolean;

  constructor() { }

  ngOnInit() {
    if(this.theme === 'accent-alternative') {
      this.theme_name_for_url = 'alternative';
    }
  }

}
