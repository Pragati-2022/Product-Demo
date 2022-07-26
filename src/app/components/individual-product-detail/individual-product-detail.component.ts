import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lutimesSync } from 'fs';
import { ProductService } from 'src/app/services/proudct/product.service';

@Component({
  selector: 'app-individual-product-detail',
  templateUrl: './individual-product-detail.component.html',
  styleUrls: ['./individual-product-detail.component.scss'],
})
export class IndividualProductDetailComponent implements OnInit {
  @Input() product: any;
  expand = 'less';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    console.log(this.product);
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  onSize(size : string){
    const index = this.productService.products.findIndex((product) => product.id == this.product[0].id)

    if(index === -1 || index === undefined || index === null){
      return;
    }
    this.productService.products[index].size = size;
  }
}
