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

  it('should get 0 tax if income is 2,50,000; under the old regime', () => {
    const tax = service.getTax(250000, 'old');
    expect(tax.tax).toBe(0);
  });

  it('should get 0.05 tax if income is 2,50,001; under the old regime', () => {
    const tax = service.getTax(250001, 'old');
    expect(tax.tax).toBe(0.05);
  });

  it('should get 12500 tax if income is 5,00,000; under the old regime', () => {
    const tax = service.getTax(500000, 'old');
    expect(tax.tax).toBe(12500);
  });

  it('should get 37500 tax if income is 7,50,000; under the old regime', () => {
    const tax = service.getTax(750000, 'old');
    expect(tax.tax).toBe(37500);
  });

  it('should get 37500.10 tax if income is 7,50,001; under the old regime', () => {
    const tax = service.getTax(750001, 'old');
    expect(tax.tax).toBe(37500.10);
  });

  it('should get 62500 tax if income is 10,00,000; under the old regime', () => {
    const tax = service.getTax(1000000, 'old');
    expect(tax.tax).toBe(62500);
  });

  it('should get 62500.20 tax if income is 10,00,001; under the old regime', () => {
    const tax = service.getTax(1000001, 'old');
    expect(tax.tax).toBe(62500.20);
  });

  it('should get 1,12,500 tax if income is 12,50,000; under the old regime', () => {
    const tax = service.getTax(1250000, 'old');
    expect(tax.tax).toBe(112500);
  });

  it('should get 1,12,500.20 tax if income is 12,50,001; under the old regime', () => {
    const tax = service.getTax(1250001, 'old');
    expect(tax.tax).toBe(112500.20);
  });

  it('should get 162500 tax if income is 15,00,000; under the old regime', () => {
    const tax = service.getTax(1500000, 'old');
    expect(tax.tax).toBe(162500);
  });

  it('should get 1,62,500.30 tax if income is 15,00,001; under the old regime', () => {
    const tax = service.getTax(1500001, 'old');
    expect(tax.tax).toBe(162500.30);
  });


  it('should get 0 tax if income is 2,50,000; under the new regime', () => {
    const tax = service.getTax(250000, 'new');
    expect(tax.tax).toBe(0);
  });

  it('should get 0 tax if income is 2,50,001; under the new regime', () => {
    const tax = service.getTax(250001, 'new');
    expect(tax.tax).toBe(0);
  });

  it('should get 0 tax if income is 5,00,000; under the new regime', () => {
    const tax = service.getTax(500000, 'new');
    expect(tax.tax).toBe(0);
  });

  it('should get 25,000 tax if income is 7,50,000; under the new regime', () => {
    const tax = service.getTax(750000, 'new');
    expect(tax.tax).toBe(25000);
  });

  it('should get 25,000.15 tax if income is 7,50,001; under the new regime', () => {
    const tax = service.getTax(750001, 'new');
    expect(tax.tax).toBe(25000.15);
  });

  it('should get 62,500 tax if income is 10,00,000; under the new regime', () => {
    const tax = service.getTax(1000000, 'new');
    expect(tax.tax).toBe(62500);
  });

  it('should get 62500.20 tax if income is 10,00,001; under the new regime', () => {
    const tax = service.getTax(1000001, 'new');
    expect(tax.tax).toBe(62500.20);
  });

  it('should get 1,12,500 tax if income is 12,50,000; under the new regime', () => {
    const tax = service.getTax(1250000, 'new');
    expect(tax.tax).toBe(112500);
  });

  it('should get 1,12,500.3 tax if income is 12,50,001; under the new regime', () => {
    const tax = service.getTax(1250001, 'new');
    expect(tax.tax).toBe(112500.25);
  });

  it('should get 1,75,000 tax if income is 15,00,000; under the new regime', () => {
    const tax = service.getTax(1500000, 'new');
    expect(tax.tax).toBe(175000);
  });

  it('should get 1,75,000.30 tax if income is 15,00,001; under the new regime', () => {
    const tax = service.getTax(1500001, 'new');
    expect(tax.tax).toBe(175000.3);
  });
});
