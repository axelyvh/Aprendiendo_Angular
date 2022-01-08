import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryView } from './category.view';

describe('CategoryView', () => {
  let component: CategoryView;
  let fixture: ComponentFixture<CategoryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
