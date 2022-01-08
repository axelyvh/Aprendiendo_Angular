import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformView } from './platform.view';

describe('PlatformView', () => {
  let component: PlatformView;
  let fixture: ComponentFixture<PlatformView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
