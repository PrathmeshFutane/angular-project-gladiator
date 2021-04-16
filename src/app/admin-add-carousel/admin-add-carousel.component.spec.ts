import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCarouselComponent } from './admin-add-carousel.component';

describe('AdminAddCarouselComponent', () => {
  let component: AdminAddCarouselComponent;
  let fixture: ComponentFixture<AdminAddCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
