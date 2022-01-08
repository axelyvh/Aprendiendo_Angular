import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../commons/interfaces/product.interface';
import { ProductsHttpService } from '../../commons/services/products-http.service';
// import { LoggerService } from '../../services/logger.service';

@Component({
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.css']
})
export class ProductListView implements OnInit {
  products: Product[] = [];
  // products$: Observable<Product[]>;

  constructor(
    // public logger: LoggerService
    // private productsHttp: ProductsHttpService,
    private activatedRoute: ActivatedRoute,
    // private errorService: ErrorService,
  ) {
  }

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data.products;
    // this.products$ = this.productsHttp.getAll();

    /*
    this.productsHttp.getAll()
      .subscribe(
        products => this.products = products,
        // (err: HttpErrorResponse) => this.errorService.openAlert(err.status, err.message)
      );

      /*
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
        complete: () => console.log('complete'),
      });
      */
  }

}
