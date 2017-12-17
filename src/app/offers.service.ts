import { Offer } from './ui-elements/offers-list/offer/offer.model';

export class OffersService {

  private offers: Offer[] = [
    new Offer(
     'Laboris quis qui',
      20,
      true,
      8,
      'Adipisicing consequat eu velit anim deserunt in fugiat ea ex dolor eu enim consectetur sunt. Nostrud eu officia eiusmod esse officia id magna non anim sint ut voluptate laboris occaecat laborum in in. Tempor qui consectetur sed minim officia duis sed proident. Nisi do dolore in laboris laborum ut anim dolor enim irure aliqua. Aliquip voluptate est voluptate sint aliqua in culpa id sed adipisicing quis velit amet eu fugiat labore. Lorem ipsum dolor dolor adipisicing aliquip ea labore mollit ad occaecat enim nisi ad.',
      10,
      './assets/images/offer_images/offer_1.jpeg',
      0),
    new Offer(
     'Et culpa et in et dolore',
      25,
      false,
      6,
      'Minim reprehenderit duis aliquip consequat reprehenderit in excepteur sint nulla laboris velit mollit anim. Nostrud irure id labore cillum nisi non sunt ut velit adipisicing ut eiusmod eiusmod deserunt et enim ullamco. Dolore voluptate officia in officia occaecat sit ut sit commodo nisi amet ut commodo adipisicing incididunt dolor deserunt. Nisi dolor dolor aliqua elit commodo sunt non laboris minim. Excepteur qui in deserunt qui qui laboris ad culpa laborum ullamco. Lorem ipsum consectetur enim ad eiusmod culpa proident fugiat ad enim aliqua sunt esse aliquip proident quis laboris ad esse.',
      3,
      './assets/images/offer_images/offer_2.jpeg',
      0.3),
    new Offer(
     'Lorem ipsum occaecat',
      100,
      false,
      2,
      'Culpa consequat dolore dolore laboris in amet nisi ex cillum labore aliquip voluptate magna occaecat elit dolor esse sunt. Tempor nostrud excepteur in cupidatat reprehenderit cillum cupidatat dolor ex laborum. Culpa adipisicing dolor sed incididunt in ad ex esse culpa ut adipisicing duis cillum. Laboris ullamco dolore incididunt deserunt laboris exercitation dolor fugiat sit id voluptate eu nisi dolor. Reprehenderit cupidatat duis aliquip sunt esse labore qui amet eu. Ullamco duis dolore est nostrud esse et cillum qui veniam qui commodo dolor labore laborum ex laborum consectetur reprehenderit.',
      7,
      './assets/images/offer_images/offer_3.jpeg',
      0),
    new Offer(
     'Ex id labore ut magna',
      10,
      false,
      4,
      'Sunt et laborum qui mollit dolor magna reprehenderit eu in ad laborum irure. Laboris non ut qui incididunt cillum ea quis non. Elit nostrud cupidatat adipisicing. Nulla sint anim sit excepteur laboris veniam adipisicing dolore aliqua sint id non ad est culpa tempor. Consequat quis labore dolor cupidatat exercitation nostrud et dolor laboris occaecat adipisicing non eu ea dolore ut in esse. Qui in et qui consectetur velit excepteur ullamco fugiat tempor ex amet id mollit sint dolore sunt aute. In adipisicing velit cillum fugiat ea culpa consectetur adipisicing labore in.',
      10,
      './assets/images/offer_images/offer_4.jpeg',
      0),
    new Offer(
     'Qui ullamco labore',
      50,
      true,
      4,
      'Cillum et enim incididunt non adipisicing velit anim ex ut in. Veniam sunt ullamco nisi consectetur ut amet deserunt pariatur est. Qui culpa sint ut dolore anim in minim ut est est esse mollit ad. Esse occaecat nisi in mollit mollit in anim deserunt sint culpa eiusmod nisi nostrud. Lorem ipsum nulla anim in nisi occaecat proident ullamco ut non enim elit sed do magna ut aliqua dolore enim. Quis reprehenderit amet fugiat eiusmod commodo eiusmod sed consequat sit aliqua mollit. Do labore excepteur sed ut occaecat pariatur dolor reprehenderit occaecat consequat.',
      10,
      './assets/images/offer_images/offer_5.jpeg',
      0.2),
    new Offer(
     'In non eu do in enim',
      65,
      false,
      4,
      'Sit incididunt nisi in aliquip aliqua id do eiusmod veniam. Enim eiusmod culpa do occaecat magna ex enim fugiat. Esse cillum aliquip dolor sint amet qui nisi mollit ex quis ut dolore dolore occaecat. Enim sunt cupidatat commodo dolore et ad eiusmod elit minim nisi incididunt veniam ut ut veniam eiusmod magna. Ut dolor deserunt non consequat laborum in minim officia fugiat labore. Lorem ipsum labore sit esse sunt elit elit eiusmod aliquip laboris duis excepteur labore aliquip ex sed. Lorem ipsum duis ex quis enim irure sint nulla culpa nostrud ad labore enim exercitation sed id duis non in sunt.',
      6,
      './assets/images/offer_images/offer_6.jpeg',
      0.5),
    new Offer(
     'Proident culpa mollit',
      40,
      false,
      4,
      'Qui adipisicing tempor elit nulla id dolor anim est est dolor mollit fugiat adipisicing adipisicing. Est aliquip ut excepteur ad duis incididunt proident ea. Laborum mollit id sint voluptate ut fugiat veniam tempor consectetur in exercitation nulla fugiat tempor. Voluptate eu id in nulla in fugiat veniam labore laborum dolore velit esse. Cupidatat consequat deserunt dolore elit esse adipisicing cillum minim fugiat ullamco labore consectetur tempor dolor ullamco. Dolore deserunt non sed laboris aliquip id ut cillum dolor et ad.',
      10,
      './assets/images/offer_images/offer_7.jpeg',
      0),
    new Offer(
     'Amet est veniam duis ut ut duis nisi laborum aliquip',
      0,
      false,
      13,
      'Ea elit in ullamco minim consectetur amet nostrud officia non anim elit mollit nulla dolor eu magna. Commodo labore aute nulla anim ut ut labore adipisicing ullamco consectetur qui non id ad nisi ex. Enim consequat in sed laborum reprehenderit reprehenderit duis laborum do ullamco ex exercitation ut culpa ut. Amet quis in mollit aliqua nisi occaecat qui nulla est do deserunt fugiat laborum minim in. Lorem ipsum dolor veniam ullamco tempor reprehenderit culpa adipisicing aute ullamco mollit ex laboris cupidatat sit. Excepteur elit commodo magna ut nostrud labore do labore.',
      10,
      './assets/images/offer_images/offer_8.jpeg',
      0)
  ];

  getOffers(limit = null, exclude = null) {
    if(limit && exclude < limit){
      let filtered_offers = this.offers.slice(0, +limit+1);
      filtered_offers[exclude] = null;
      return filtered_offers;
    } else if(limit) {
      return this.offers.slice(0, +limit);
    }
    return this.offers.slice();
   
    
  }

  getOfferByIndex(index) {
    return this.offers[index];
  }
a
}