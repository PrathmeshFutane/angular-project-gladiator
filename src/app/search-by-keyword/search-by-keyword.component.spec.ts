import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByKeywordComponent } from './search-by-keyword.component';

describe('SearchByKeywordComponent', () => {
  let component: SearchByKeywordComponent;
  let fixture: ComponentFixture<SearchByKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
