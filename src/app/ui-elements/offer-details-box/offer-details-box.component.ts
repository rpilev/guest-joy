import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { Offer } from '../offers-list/offer/offer.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-offer-details-box',
  templateUrl: './offer-details-box.component.html',
  styleUrls: ['./offer-details-box.component.scss']
})
export class OfferDetailsBoxComponent implements OnInit, OnChanges {

  @ViewChild('order_form') form: NgForm;

  @Input() offer: Offer;
  @Input() offer_index;
  @Input('theme') theme;
  quantities: number[] = [];

  form_error = '';
  form_success = '';

  constructor() { }

  ngOnInit() {
    this.quantities = [];
    for(let i=1;i<this.offer.quantity_available-1;i++) {
      this.quantities.push(i);
    }
  }

  ngOnChanges() {
    this.form_error = '';
    this.form_success = '';
    this.quantities = [];
    for(let i=1;i<this.offer.quantity_available-1;i++) {
      this.quantities.push(i);
    }
    this.form.resetForm();
  }

  onSubmit(form) {
    form.controls['input-remarks'].touched = true;
    form.controls['quantity-select'].touched = true;

    if(form.value['quantity-select'] === '' ||
      form.value['input-remarks'] === '') {
      this.form_error = 'Please fill in all of the fields';
      return;
    }
    this.form_error = '';
    console.log('Quantity selected: ' + form.value['quantity-select']);
    console.log('User remarks: ' + form.value['input-remarks']);
    this.form_success = 'Thank you! Your order has been placed.';
  }

}
