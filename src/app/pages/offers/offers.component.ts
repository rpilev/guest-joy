import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../ui-elements/hero/hero.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, OnDestroy {

  accent_theme: string;
  background_theme: string;
  theme_subscription: Subscription;

  hero_title = 'Hello John Smith';
  hero_content = 'Proident ut elit dolore est est officia sit aute ut adipisicing fugiat ea dolore aliqua consequat. Minim aliquip enim dolore incididunt ea aliquip duis et occaecat voluptate ad tempor dolore. In irure est velit adipisicing sed.';

  hero_languages = [
    { 
      name: 'ENG',
      selected: true
    },
    { 
      name: 'RUS',
      selected: false
    },
    { 
      name: 'FIN',
      selected: false
    }
  ];

  hero = new Hero(this.hero_title, this.hero_content, this.hero_languages);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.theme_subscription = this.route.params.subscribe(
        params => {
          if(params['theme'] == 'alternative') {
            this.accent_theme = 'accent-alternative';
            this.background_theme = 'background-alternative'
          } else {
            this.accent_theme = 'accent-default';
            this.background_theme = 'background-default'
          }
        }
      );
  }

  ngOnDestroy() {
    this.theme_subscription.unsubscribe();
  }

}
