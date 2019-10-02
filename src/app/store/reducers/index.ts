import { ActionReducerMap } from '@ngrx/store'

import * as fromExpenses from './expense.reducer'
import * as fromRefunds from './refund.reducer'

export interface EntityState {
  refunds: fromRefunds.RefundState
  expenses: fromExpenses.ExpenseState
}

export const reducers: ActionReducerMap<EntityState> = {
  refunds: fromRefunds.reducer,
  expenses: fromExpenses.reducer,
}
