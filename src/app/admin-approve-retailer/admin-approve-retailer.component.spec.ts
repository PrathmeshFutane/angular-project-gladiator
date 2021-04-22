import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveRetailerComponent } from './admin-approve-retailer.component';

describe('AdminApproveRetailerComponent', () => {
  let component: AdminApproveRetailerComponent;
  let fixture: ComponentFixture<AdminApproveRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
