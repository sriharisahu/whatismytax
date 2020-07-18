import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {
  private oldTaxRates = [0.00, 0.05, 0.10, 0.10, 0.20, 0.20, 0.30];
  private newTaxRates = [0.00, 0.00, 0.10, 0.15, 0.20, 0.25, 0.30];

  constructor() { }

  getTax(income: number, regime: "old" | "new"): any {
    let tax = 0;
    const slabValue = 250000;
    const quotient = Math.floor(income / slabValue);
    const remainder = (income - (slabValue * quotient)) % slabValue;
    const selectedtaxRates = (regime === "old") ? this.oldTaxRates : this.newTaxRates;
    for (let i = 0; i <= quotient; i++) {
      tax += slabValue * selectedtaxRates[i];
    }
    if (remainder > 0) {
      tax += slabValue * selectedtaxRates[quotient + 1];
    }
    return {
      "quotient": quotient,
      "remainder": remainder,
      "tax": tax
    };
  }
}
