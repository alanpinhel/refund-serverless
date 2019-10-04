import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '@app/shared'
import { RefundsComponent } from './refunds/refunds.component'
import { RefundListComponent } from './refund-list/refund-list.component'
import { RefundFormComponent } from './refund-form/refund-form.component'
import { RefundDetailComponent } from './refund-detail/refund-detail.component'
import { ExpensesComponent } from './expenses/expenses.component'
import { ExpenseListComponent } from './expense-list/expense-list.component'
import { ExpenseFormComponent } from './expense-form/expense-form.component'
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component'

const routes: Routes = [{ path: '', pathMatch: 'full', component: RefundsComponent }]

@NgModule({
  declarations: [
    RefundsComponent,
    RefundListComponent,
    RefundFormComponent,
    RefundDetailComponent,
    ExpensesComponent,
    ExpenseListComponent,
    ExpenseFormComponent,
    ExpenseDetailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RefundsModule {}
