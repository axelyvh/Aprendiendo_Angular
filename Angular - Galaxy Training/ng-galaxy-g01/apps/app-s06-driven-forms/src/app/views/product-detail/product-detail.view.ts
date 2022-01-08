import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../commons/interfaces/product.interface';
import { ProductsHttpService } from '../../commons/services/products-http.service';
// import { LoggerService } from '../../services/logger.service';

@Component({
  templateUrl: './product-detail.view.html',
  styleUrls: ['./product-detail.view.css']
})
export class ProductDetailView implements OnInit {
  product: Product;

  constructor(
    // public logger: LoggerService,
    // private productsHttp: ProductsHttpService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = this.activatedRoute.snapshot.data.product;
  }

  ngOnInit(): void {
    /*
    const id = +this.activatedRoute.snapshot.paramMap.get('productId');

    this.productsHttp.getOne(id)
    .subscribe(
      product => this.product = product
    );
    */
  }

}
