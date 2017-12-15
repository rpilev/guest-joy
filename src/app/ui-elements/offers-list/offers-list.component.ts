import { Component, OnInit, Input } from '@angular/core';
import { Offer } from './offer/offer.model';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  offers: Offer[];
  @Input() theme: string;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
    console.log(this.offers);
  }

}
