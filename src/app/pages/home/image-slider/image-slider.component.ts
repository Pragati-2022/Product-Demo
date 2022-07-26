import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsClass } from 'src/app/constants/constants';
import { ProductService } from 'src/app/services/proudct/product.service';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  public constant;

  constructor(public productService : ProductService, private router : Router) {
    this.constant = ConstantsClass;
  }

  ngOnInit(): void {}

  onClick(product : any){
    this.router.navigate(['product-details', product.id])
  }
}
