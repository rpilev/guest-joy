import { Offer } from './ui-elements/offers-list/offer/offer.model';

export class OffersService {

  private offers: Offer[] = [
    new Offer(
     'Laboris quis qui',
      20,
      true,
      8,
      'Adipisicing consequat eu velit anim deserunt in fugiat ea ex dolor eu enim consectetur sunt. Nostrud eu officia eiusmod esse officia id magna non anim sint ut voluptate laboris occaecat laborum in in.',
      10,
      './assets/images/offer_images/offer_1.jpeg',
      0.2),
    new Offer(
     'Et culpa et in et dolore',
      25,
      false,
      6,
      'Minim reprehenderit duis aliquip consequat reprehenderit in excepteur sint nulla laboris velit mollit anim. Nostrud irure id labore cillum nisi non sunt ut velit adipisicing ut eiusmod eiusmod deserunt et enim ullamco.',
      3,
      './assets/images/offer_images/offer_2.jpeg',
      0.3),
    new Offer(
     'Lorem ipsum occaecat',
      100,
      false,
      2,
      'Culpa consequat dolore dolore laboris in amet nisi ex cillum labore aliquip voluptate magna occaecat elit dolor esse sunt. Tempor nostrud excepteur in cupidatat reprehenderit cillum cupidatat dolor ex laborum.',
      7,
      './assets/images/offer_images/offer_3.jpeg',
      0),
    new Offer(
     'Ex id labore ut magna',
      10,
      false,
      4,
      'Sunt et laborum qui mollit dolor magna reprehenderit eu in ad laborum irure. Laboris non ut qui incididunt cillum ea quis non. Elit nostrud cupidatat adipisicing.',
      10,
      './assets/images/offer_images/offer_4.jpeg',
      0),
    new Offer(
     'Qui ullamco labore',
      50,
      false,
      4,
      'Cillum et enim incididunt non adipisicing velit anim ex ut in. Veniam sunt ullamco nisi consectetur ut amet deserunt pariatur est. Qui culpa sint ut dolore anim in minim ut est est esse mollit ad.',
      10,
      './assets/images/offer_images/offer_5.jpeg',
      0),
    new Offer(
     'In non eu do in enim',
      65,
      false,
      4,
      'Sit incididunt nisi in aliquip aliqua id do eiusmod veniam. Enim eiusmod culpa do occaecat magna ex enim fugiat. Esse cillum aliquip dolor sint amet qui nisi mollit ex quis ut dolore dolore occaecat.',
      6,
      './assets/images/offer_images/offer_6.jpeg',
      0.5),
    new Offer(
     'Proident culpa mollit',
      40,
      false,
      4,
      'Qui adipisicing tempor elit nulla id dolor anim est est dolor mollit fugiat adipisicing adipisicing. Est aliquip ut excepteur ad duis incididunt proident ea.',
      10,
      './assets/images/offer_images/offer_7.jpeg',
      0),
    new Offer(
     'Amet est veniam duis ut ut duis nisi laborum aliquip',
      0,
      false,
      13,
      'Ea elit in ullamco minim consectetur amet nostrud officia non anim elit mollit nulla dolor eu magna. Commodo labore aute nulla anim ut ut labore adipisicing ullamco consectetur qui non id ad nisi ex.',
      10,
      './assets/images/offer_images/offer_8.jpeg',
      0)
  ];

  getOffers() {
    return this.offers.slice();
  }

}