import { Component, OnInit } from '@angular/core';
import { ConstantsClass } from 'src/app/constants/constants';
import SwiperCore, {
  EffectFlip,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFlip]);

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  public constant;

  images = [
    {
      name: ' Thread Embroidered Dress With Jacket ',
      price: 3499,
      image:
        'https://cdn.ainabys4u.com/product/130dc281c61f4d4e8092ffceca65f5f0.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/6ac5836aca8e453fac7d11a399a44d72.jpg',
    },
    {
      name: ' Patola Peplum Sharara Set ',
      price: 3499,
      image:
        'https://cdn.ainabys4u.com/product/e2f2eb21f0b34acf92b9e8f2c9b2a9be.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/b96f2c8268bf48989efd3649da4b9b6f.jpg',
    },
    {
      name: 'Embroidered Asymmetric Tunic With Pants',
      price: 3499,
      image:
        'https://cdn.ainabys4u.com/product/d9a70cfa98234eaf9d9284a796272e4d.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/8f143e303706475c97791638623d9f7a.jpg',
    },
    {
      name: 'Pre-Draped Saree',
      price: 1999,
      image:
        'https://cdn.ainabys4u.com/product/66ecfb17329147919dfabb547e52e54c.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/daf29eaaa5fb4985b91ace80d85cf104.jpg',
    },
    {
      name: 'Handwork Co-Ord Set',
      price: 4099,
      image:
        'https://cdn.ainabys4u.com/product/6e76f1a8d7f2452aa5e8934e594d27af.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/79307b5894e34e2faeb4074dc2895d32.jpg',
    },
    {
      name: 'Pre-Draped Ruffled Saree',
      price: 2399,
      image:
        'https://cdn.ainabys4u.com/product/63ee5ad822a84f93b947bac36a96c98e.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/1bf491acb31a410899855603b127ec86.jpg',
    },
    {
      name: 'Handwork Kaftan Set',
      price: 2399,
      image:
        'https://cdn.ainabys4u.com/product/aee00994e71c4d658468b0fc8875d3f4.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/0efeec60d4b34377bbd2dd05d8dc41fd.jpg',
    },
    {
      name: 'Handwork Kaftan Set',
      price: 2399,
      image:
        'https://cdn.ainabys4u.com/product/ea6decdaf9b84f588a03b0ed04281704.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/07e2db1b6f0d446f9af6cd112264b29b.jpg',
    },
    {
      name: 'Handwork Kaftan Set',
      price: 1399,
      image:
        'https://cdn.ainabys4u.com/product/ba24cd211b64470e865fff4e2d57e715.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/9e62355262814972b371b4d9ab12d9a4.jpg',
    },
    {
      name: 'Peppy Printed Dress',
      price: 1999,
      image:
        'https://cdn.ainabys4u.com/product/3754f35e4a454bfb974676a4715d3a53.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/c5c8eed95bdf42b981e4f1340f94ef85.jpg',
    },
    {
      name: 'Paisley Print Jacket With Smocking Dress',
      price: 1999,
      image:
        'https://cdn.ainabys4u.com/product/dd61e8a9f0b9486588542b569186d12d.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/bde5abb5c3274b3386d3ff5b4ffb7fe3.jpg',
    },
    {
      name: 'Geometric print jacket with smocking inner',
      price: 2699,
      image:
        'https://cdn.ainabys4u.com/product/2d9ffd17030f46fd8bdc7fda928ee428.jpg',
      image2:
        'https://cdn.ainabys4u.com/product/fdf25e6b0b234425b23a9514eaf1b2d3.jpg',
    },
  ];
  constructor() {
    this.constant = ConstantsClass;
  }

  ngOnInit(): void {}
}
