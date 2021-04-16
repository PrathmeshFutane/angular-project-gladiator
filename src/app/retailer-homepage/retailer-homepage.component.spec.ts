import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerHomepageComponent } from './retailer-homepage.component';

describe('RetailerHomepageComponent', () => {
  let component: RetailerHomepageComponent;
  let fixture: ComponentFixture<RetailerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
