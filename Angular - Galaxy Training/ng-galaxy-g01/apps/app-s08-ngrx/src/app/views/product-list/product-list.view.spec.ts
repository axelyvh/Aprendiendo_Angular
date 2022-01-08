import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListView } from './product-list.view';

describe('ProductListView', () => {
  let component: ProductListView;
  let fixture: ComponentFixture<ProductListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
