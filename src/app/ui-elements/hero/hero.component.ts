import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input('content') hero: Hero;
  @Input() theme: string;

  constructor() { }

  ngOnInit() {
  }

}
