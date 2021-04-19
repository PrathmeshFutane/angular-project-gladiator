import { TestBed } from '@angular/core/testing';

import { AddCategoryServiceService } from './category-service.service';

describe('AddCategoryServiceService', () => {
  let service: AddCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
