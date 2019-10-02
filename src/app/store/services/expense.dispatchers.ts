import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { Expense } from '@app/core'
import { EntityState } from '../reducers'
import * as ExpenseAction from '../actions'

@Injectable()
export class ExpenseDispatchers {
  constructor(private store: Store<EntityState>) {}

  getExpenses(refund: string) {
    this.store.dispatch(ExpenseAction.getExpenses({ refund }))
  }

  addExpense(expense: Expense) {
    this.store.dispatch(ExpenseAction.addExpense({ expense }))
  }

  updateExpense(expense: Expense) {
    this.store.dispatch(ExpenseAction.updateExpense({ expense }))
  }

  deleteExpense(expense: Expense) {
    this.store.dispatch(ExpenseAction.deleteExpense({ expense }))
  }
}
