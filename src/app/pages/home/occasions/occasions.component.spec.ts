import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCCASIONSComponent } from './occasions.component';

describe('OCCASIONSComponent', () => {
  let component: OCCASIONSComponent;
  let fixture: ComponentFixture<OCCASIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OCCASIONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OCCASIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
