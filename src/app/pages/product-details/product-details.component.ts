import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/proudct/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id : any;
  product : any;

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    })

    this.product = this.productService.products.filter((product) => product.id == this.id);
   }

  ngOnInit(): void {
  }

}
