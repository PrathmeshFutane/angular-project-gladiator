import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCheckoutComponent } from './final-checkout.component';

describe('FinalCheckoutComponent', () => {
  let component: FinalCheckoutComponent;
  let fixture: ComponentFixture<FinalCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
