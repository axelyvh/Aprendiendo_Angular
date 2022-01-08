import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormView } from './product-form.view';

describe('ProductFormView', () => {
  let component: ProductFormView;
  let fixture: ComponentFixture<ProductFormView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
