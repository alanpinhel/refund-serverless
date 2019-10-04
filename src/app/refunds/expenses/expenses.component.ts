import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { MasterDetailCommands, Refund, Expense } from '@app/core'
import { ExpenseSelectors, ExpenseDispatchers } from '@app/store'

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent implements MasterDetailCommands<Expense>, OnInit {
  @Input() refund: Refund
  @Input() masterCommands: MasterDetailCommands<Refund>

  selected: Expense
  commands = this

  expenses$: Observable<Expense[]>
  loading$: Observable<boolean>

  constructor(private expenseSelectors: ExpenseSelectors, private expenseDispatchers: ExpenseDispatchers) {
    this.expenses$ = this.expenseSelectors.expenses$
    this.loading$ = this.expenseSelectors.loading$
  }

  ngOnInit() {
    this.expenseDispatchers.getExpenses(this.refund.id)
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

  hideActions() {
    return this.refund.status !== 'draft'
  }
}
