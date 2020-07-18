import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { TaxCalculatorService } from '../tax-calculator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formgroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private taxCalulcatorService: TaxCalculatorService) {
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
/*     if (!form.valid) {
      return;
    } else { */
      console.log('form', form);
      const tax = this.taxCalulcatorService.getTax(form.grossIncome, form.regime);
      console.log('tax:: ', tax);
    // }
  }
}
