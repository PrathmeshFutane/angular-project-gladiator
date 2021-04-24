import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerViewProductComponent } from './retailer-view-product.component';

describe('RetailerViewProductComponent', () => {
  let component: RetailerViewProductComponent;
  let fixture: ComponentFixture<RetailerViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerViewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
