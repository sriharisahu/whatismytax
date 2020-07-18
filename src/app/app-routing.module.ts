import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeSupplierComponent } from './income-supplier/income-supplier.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'income', component: IncomeSupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
