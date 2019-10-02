import { Injectable } from '@angular/core'
import { Store, createSelector, createFeatureSelector } from '@ngrx/store'

import { EntityState } from '../reducers'
import { ExpenseState } from '../reducers/expense.reducer'

const getEntityState = createFeatureSelector<EntityState>('entityCache')

const getExpenseState = createSelector(
  getEntityState,
  (state: EntityState) => state.expenses
)

const getAllExpenses = createSelector(
  getExpenseState,
  (state: ExpenseState) => state.expenses
)

const getExpensesLoading = createSelector(
  getExpenseState,
  (state: ExpenseState) => state.loading
)

@Injectable()
export class ExpenseSelectors {
  constructor(private store: Store<EntityState>) {}
  expenses$ = this.store.select(getAllExpenses)
  expenseState$ = this.store.select(getExpenseState)
  loading$ = this.store.select(getExpensesLoading)
}
