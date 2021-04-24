import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderItemComponent } from './view-order-item.component';

describe('ViewOrderItemComponent', () => {
  let component: ViewOrderItemComponent;
  let fixture: ComponentFixture<ViewOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
