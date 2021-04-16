import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTotalRetailerComponent } from './admin-total-retailer.component';

describe('AdminTotalRetailerComponent', () => {
  let component: AdminTotalRetailerComponent;
  let fixture: ComponentFixture<AdminTotalRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTotalRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTotalRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
