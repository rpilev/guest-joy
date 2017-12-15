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

  constructor() { }

  ngOnInit() {
  }

}
