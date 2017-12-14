import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsBoxComponent } from './offer-details-box.component';

describe('OfferDetailsBoxComponent', () => {
  let component: OfferDetailsBoxComponent;
  let fixture: ComponentFixture<OfferDetailsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
