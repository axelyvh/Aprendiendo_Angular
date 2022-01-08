import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailView } from './product-detail.view';

describe('ProductDetailView', () => {
  let component: ProductDetailView;
  let fixture: ComponentFixture<ProductDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
