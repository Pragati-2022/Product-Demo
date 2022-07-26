import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualProductDetailComponent } from './individual-product-detail.component';

describe('IndividualProductDetailComponent', () => {
  let component: IndividualProductDetailComponent;
  let fixture: ComponentFixture<IndividualProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
