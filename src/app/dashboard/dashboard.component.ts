import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, UntypedFormControl } from '@angular/forms';
import { TaxCalculatorService } from '../services/tax-calculator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formgroup: UntypedFormGroup;
  tax: any;
  surcharge: number;
  cess: number;
  totalTax: number;

  constructor(private formBuilder: UntypedFormBuilder, private taxCalulcatorService: TaxCalculatorService) {
  }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      firstName: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      middleName: [null, Validators.pattern('^[a-zA-Z]+$')],
      lastName: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])],
      address: [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(100)])],
      dateOfBirth: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
      grossIncome: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      regime: ['old', null]
    });
  }

  onFormSubmit(form): void {
    if (!form.valid) {
      this.validateAllFormFields(form);
    } else {
      const formValue = form.value;
      this.tax = this.taxCalulcatorService.getTax(formValue.grossIncome, formValue.regime);
      this.surcharge = 0.02 * this.tax.tax;
      this.cess = 0.02 * this.tax.tax;
      this.totalTax = this.tax.tax + this.surcharge + this.cess;
    }
  }

  validateAllFormFields(formGroup: UntypedFormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);             // {3}
      if (control instanceof UntypedFormControl) {             // {4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }

}
