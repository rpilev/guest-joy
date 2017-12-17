import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersService } from '../../offers.service';
import { Offer } from '../../ui-elements/offers-list/offer/offer.model';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit, OnDestroy {

  index: number;
  params_subscription: Subscription;
  offer: Offer;
  accent_theme: string;
  theme_name_for_url: string;

  constructor(private route: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit() {
    this.params_subscription = this.route.params.subscribe(
      params => {
        if(params['theme'] == 'alternative') {
          this.accent_theme = 'accent-alternative';

          document.body.className = 'background-alternative';
        } else {
          this.accent_theme = 'accent-default';

          document.body.className = 'background-default';
        }

        this.theme_name_for_url = params['theme'];
        this.index = +params['id'];
        this.offer = this.offersService.getOfferByIndex(this.index);
        window.scrollTo(0, 0);
      }
    );
    this.offer = this.offersService.getOfferByIndex(this.index);
  }

  ngOnDestroy() {
    this.params_subscription.unsubscribe();
  }

}
