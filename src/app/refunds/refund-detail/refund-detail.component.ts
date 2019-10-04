import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Refund, MasterDetailCommands, Expense } from '@app/core'
import { ExpenseDispatchers, ExpenseSelectors } from '@app/store'

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent implements MasterDetailCommands<Expense>, OnInit {
  @Input() refund: Refund
  @Input() commands: MasterDetailCommands<Refund>

  selected: Expense
  subcommands = this

  expenses$: Observable<Expense[]>
  loading$: Observable<boolean>

  constructor(private expenseSelectors: ExpenseSelectors, private expenseDispatchers: ExpenseDispatchers) {
    this.expenses$ = this.expenseSelectors.expenses$
    this.loading$ = this.expenseSelectors.loading$
  }

  ngOnInit() {
    this.expenseDispatchers.getExpenses(this.refund.id)
  }

  closeRefund() {
    this.commands.close()
  }

  deleteRefund() {
    this.closeRefund()
    this.commands.delete(this.refund)
  }

  confirmRefund() {
    this.closeRefund()
    this.commands.update({ ...this.refund, status: 'confirmed' })
  }

  showActions() {
    return this.refund.status === 'draft'
  }

  close() {
    this.selected = null
  }

  add(expense: Expense) {
    this.expenseDispatchers.addExpense(expense)
  }

  delete(expense: Expense) {
    this.expenseDispatchers.deleteExpense(expense)
  }

  select(expense: Expense) {
    this.selected = expense
  }

  update(expense: Expense) {
    this.expenseDispatchers.updateExpense(expense)
  }

  enableAddMode() {
    this.selected = <any>{}
  }
}
