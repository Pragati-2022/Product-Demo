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

  images = [
    {
      image:
        'https://cdn.ainabys4u.com/cms/e45161c316cb480ea6f5e88fe0d516df.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/5786276306514616b6e18d7c70f78f15.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/427e7a688e684ca3a71c2071c7d96729.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/9c1468b611024ab1bbe97768c1e0b9e5.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/1636c280ed774c7ba13c0850f08bd206.jpg',
    },
  ];
  constructor() {
    this.constant = ConstantsClass;
  }

  ngOnInit(): void {}
}
