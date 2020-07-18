import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSupplierComponent } from './income-supplier.component';

describe('IncomeSupplierComponent', () => {
  let component: IncomeSupplierComponent;
  let fixture: ComponentFixture<IncomeSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
