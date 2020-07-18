import { TestBed } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {
  let service: TaxCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get 0 tax if income is 2,50,000; under the old regime',()=>{
    const tax = service.getTax(250000, 'old');
    expect(tax.tax).toBe(0, 'Tax on free slab is wrong');
  });

  it('should get 0.15 tax if income is 2,50,001; under the old regime',()=>{
    const tax = service.getTax(250001, 'old');
    expect(tax.tax).toBe(0.15, 'Tax on 1st slab in old regime is wrong');
  });

  it('should get 0 tax if income is 5,00,000; under the old regime',()=>{
    const tax = service.getTax(500000, 'old');
    expect(tax.tax).toBe(0.15, 'Tax on 1st slab in old regime is wrong');
  });

  it('should get 0 tax if income is 7,50,000',()=>{
    const tax = service.getTax(750000, 'old');
    expect(tax.tax).toBe(0, 'Tax on 2nd slab is wrong');
  });

  it('should get 0.15 tax if income is 7,50,001',()=>{
    const tax = service.getTax(750001, 'old');
    expect(tax.tax).toBe(0.15, 'Tax on 2nd slab in old regime is wrong');
  });

  it('should get 0 tax if income is 10,00,000',()=>{
    const tax = service.getTax(1000000, 'old');
    expect(tax.tax).toBe(0.15, 'Tax on 1st slab in old regime is wrong');
  });

});
