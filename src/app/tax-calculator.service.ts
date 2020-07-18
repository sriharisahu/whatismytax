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
    0.20, //10,00,001 - 12,50,000 
    0.20, //12,50,001 - 15,00,000
    0.30  //15,00,001 - ...
  ];
  private newTaxRates = [
    0.00, //        0 -  2,50,000
    0.00, // 2,50,001 -  5,00,000
    0.10, // 5,00,001 -  7,50,000
    0.15, // 7,50,001 - 10,00,000
    0.20, //10,00,001 - 12,50,000 
    0.25, //12,50,001 - 15,00,000
    0.30  //15,00,001 - ...
  ];

  constructor() { }

  getTax(income: number, regime: 'old' | 'new'): any {
    let tax = 0;
    const slabValue = 250000;
    const quotient = Math.floor(income / slabValue);
    const remainder = (income - (slabValue * quotient)) % slabValue;
    const selectedtaxRates = (regime === 'old') ? this.oldTaxRates : this.newTaxRates;
    /* if (regime === 'old') {
      if (quotient === 0 && remainder === 0) {
        return 0;
      } else if (quotient === 0 && remainder > 0) {
        return remainder * selectedtaxRates[quotient + 1];
      } else {
        if (quotient !== 0) {
          if (quotient === 1) {
            return slabValue * selectedtaxRates[0];
          } else if (quotient === 2) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]);
          } else if (quotient === 3) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]) + (slabValue * selectedtaxRates[2]);
          } else if (quotient === 4) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]) + (slabValue * selectedtaxRates[2]) + (slabValue * selectedtaxRates[3]);
          } else if (quotient === 5) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]) + (slabValue * selectedtaxRates[2]) + (slabValue * selectedtaxRates[3]) + (slabValue * selectedtaxRates[4]);
          } else if (quotient === 6) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]) + (slabValue * selectedtaxRates[2]) + (slabValue * selectedtaxRates[3]) + (slabValue * selectedtaxRates[4]) + (slabValue * selectedtaxRates[5]);
          } else if (quotient === 7) {
            return (slabValue * selectedtaxRates[0]) + (slabValue * selectedtaxRates[1]) + (slabValue * selectedtaxRates[2]) + (slabValue * selectedtaxRates[3]) + (slabValue * selectedtaxRates[4]) + (slabValue * selectedtaxRates[5]) + (slabValue * selectedtaxRates[6]);
          } else {
            console.log('no condition matched for quotient', quotient);
            return 0;
          }
        } else {
          console.error('quotient {} remainder {}', quotient, remainder);
        }
      }
    } else if (regime === 'new') {
      return 0;
    } else {
      return new Error('Unsupported regime');
    } */
    console.log('selectedtaxRates, quotient, remainder', selectedtaxRates, quotient, remainder);
    for (let i = 0; i <= quotient; i++) {
      console.log('selectedtaxRate {} for slab {} with remainder {} and quotient', selectedtaxRates[i], slabValue, remainder, quotient);
      tax += (remainder > slabValue ? slabValue : remainder) * selectedtaxRates[i];
      console.log('tax',tax);
    }
    console.log('perfectly divisble tax :: ', tax);
    if (quotient > 0 && remainder > 0) {
      tax += remainder * selectedtaxRates[quotient + 1];
    }
    console.log('remainder tax :: ', tax);
    tax = Math.round((tax + Number.EPSILON) * 100)/100;
    const calculatedTax = { quotient, remainder, tax };
    console.log(calculatedTax);
    return calculatedTax;
  }
}
