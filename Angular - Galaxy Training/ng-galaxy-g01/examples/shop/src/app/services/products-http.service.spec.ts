import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../interfaces/product.interface';
import { ProductsHttpService } from './products-http.service';

fdescribe('@ProductsHttpService', () => {
  let productsHttp: ProductsHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsHttpService],
      imports: [HttpClientTestingModule],
    });

    productsHttp = TestBed.inject(ProductsHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get all products', () => {
    const testData: Product[] = [
      {
        id: 1,
        title: 'test',
        price: 10,
        description: 'test',
        category: 'test',
        image: 'test',
      },
    ];

    productsHttp.getAll().subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne(productsHttp.endpoint);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('should get filter products by category', () => {
    const testData: Product[] = [
      {
        id: 1,
        title: 'test',
        price: 10,
        description: 'test',
        category: 'test',
        image: 'test',
      },
    ];

    productsHttp
      .getAll({ category: 'electronics' })
      .subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne(`${productsHttp.endpoint}?category=electronics`);

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('should get all categories', () => {
    const testData: string[] = [
      'electronics',
      'jewelery',
      'men\'s clothing',
      'women\'s clothing',
    ];

    productsHttp
      .getAllCategories()
      .subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne(
      `${productsHttp.endpoint}/categories`
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });
});
