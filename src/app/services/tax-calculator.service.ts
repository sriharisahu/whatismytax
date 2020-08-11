import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {
  private oldTaxRates = [
    0.00, //        0 -  2,50,000
    0.05, // 2,50,001 -  5,00,000
    0.10, // 5,00,001 -  7,50,000
    0.10, // 7,50,001 - 10,00,000
    0.20, // 10,00,001 - 12,50,000
    0.20, // 12,50,001 - 15,00,000
    0.30  // 15,00,001 - ...
  ];
  // section 115BAC
  private newTaxRates = [
    0.00, //        0 -  2,50,000
    0.00, // 2,50,001 -  5,00,000
    0.10, // 5,00,001 -  7,50,000
    0.15, // 7,50,001 - 10,00,000
    0.20, // 10,00,001 - 12,50,000
    0.25, // 12,50,001 - 15,00,000
    0.30  // 15,00,001 - ...
  ];

  constructor() { }

  getTax(income: number, regime: 'old' | 'new'): any {
    let tax = 0;
    const cumulativeTax = [];
    const slabValue = 250000;
    const quotient = Math.floor(income / slabValue);
    const remainder = (income - (slabValue * quotient)) % slabValue;
    const selectedtaxRates = (regime === 'old') ? this.oldTaxRates : this.newTaxRates;
    for (let i = 0; i < (quotient <= selectedtaxRates.length ? quotient : selectedtaxRates.length); i++) {
      cumulativeTax[i] = slabValue * selectedtaxRates[i];
    }
    if (quotient > 0 && remainder > 0) {
      if (quotient < selectedtaxRates.length ){
        cumulativeTax.push(remainder * selectedtaxRates[quotient]);
      } else {
        cumulativeTax.push((remainder + (slabValue * Math.floor(quotient - 6))) * selectedtaxRates[selectedtaxRates.length - 1]);
      }
    }
    tax = cumulativeTax.reduce((a, b) => a + b);
    tax = Math.round((tax + Number.EPSILON) * 100) / 100;
    return { quotient, remainder, tax , cumulativeTax, selectedtaxRates};
  }
}
