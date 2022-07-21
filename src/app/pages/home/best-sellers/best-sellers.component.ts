import { Component, OnInit } from '@angular/core';
import { ConstantsClass } from 'src/app/constants/constants';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent implements OnInit {
  public constant;

  sellers = [
    {
      description:
        '“I really like products from s4u. All dresses which i bought from this brand are absolutely stunning with good quality and designs. Love this brand and become a fan of the brand. Looking forward for more shopping.” ',
      author: 'Richa Agrawal',
    },
    {
      description:
        'I love S4u designs.. Trendy, stylish and pocket friendly.. with the rapid change in trend S4u gives the best trendy outfits.. Big and constant fan of S4u!',
      author: 'Nidhi',
    },
  ];
  constructor() {
    this.constant = ConstantsClass
  }

  ngOnInit(): void {}
}
