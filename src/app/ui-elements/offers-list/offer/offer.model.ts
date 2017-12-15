export class Offer {
  name: string;
  price: number;
  most_pop: boolean;
  views_weekly: number;
  description: string;
  quantity_available: number;
  imgPath: string;
  discount:  number;

  getDiscounterPrice() {
    return Math.floor((this.price - (this.price * this.discount)));
  }

  constructor(name: string, price: number, most_pop: boolean, views_weekly: number, description: string, quantity_available: number, imgPath: string, discount:  number) {
    this.name = name;
    this.price = price;
    this.most_pop = most_pop;
    this.views_weekly = views_weekly;
    this.description = description;
    this.quantity_available = quantity_available;
    this.imgPath = imgPath;
    this.discount =  discount;
  }
}