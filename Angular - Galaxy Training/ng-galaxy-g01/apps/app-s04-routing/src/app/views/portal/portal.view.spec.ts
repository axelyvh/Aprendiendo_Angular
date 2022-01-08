import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalView } from './portal.view';

describe('PortalView', () => {
  let component: PortalView;
  let fixture: ComponentFixture<PortalView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
