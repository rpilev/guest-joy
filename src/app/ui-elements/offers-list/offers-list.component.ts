import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Offer } from './offer/offer.model';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit, OnChanges {

  offers: Offer[];
  @Input() theme: string;
  @Input() limit: number;
  @Input() exclude: number;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers(this.limit, this.exclude);
  }

  ngOnChanges() {
    this.offers = this.offersService.getOffers(this.limit, this.exclude);
  }

}
