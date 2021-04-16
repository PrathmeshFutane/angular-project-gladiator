import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTotalCustomerComponent } from './admin-total-customer.component';

describe('AdminTotalCustomerComponent', () => {
  let component: AdminTotalCustomerComponent;
  let fixture: ComponentFixture<AdminTotalCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTotalCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTotalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
