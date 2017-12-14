import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit, OnDestroy {

  offer_id: number;
  offer_subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.offer_subscription = this.route.params.subscribe(
      params => {
        this.offer_id = +params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.offer_subscription.unsubscribe();
  }

}
