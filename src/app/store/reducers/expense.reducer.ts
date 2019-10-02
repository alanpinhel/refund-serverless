import { createReducer, on, Action } from '@ngrx/store'

import { Expense } from '@app/core'
import * as ExpenseActions from '../actions'

export interface ExpenseState {
  expenses: Expense[]
  loading: boolean
  error: boolean
}

export const initialState: ExpenseState = {
  expenses: [],
  loading: false,
  error: false,
}

const expenseReducer = createReducer(
  initialState,
  on(ExpenseActions.getExpenses, state => ({ ...state, loading: true })),
  on(ExpenseActions.getExpensesError, state => ({ ...state, loading: false })),
  on(ExpenseActions.getExpensesSuccess, (state, { expenses }) => ({
    ...state,
    loading: false,
    expenses,
  })),
  on(ExpenseActions.addExpense, state => ({ ...state, loading: true })),
  on(ExpenseActions.addExpenseError, state => ({ ...state, loading: false })),
  on(ExpenseActions.addExpenseSuccess, (state, { expense }) => ({
    ...state,
    loading: false,
    expenses: [...state.expenses, { ...expense }],
  })),
  on(ExpenseActions.updateExpense, (state, { expense }) => ({
    ...state,
    expenses: state.expenses.map(r => {
      if (r.id === expense.id) {
        state.loading = true
      }
      return r
    }),
  })),
  on(ExpenseActions.updateExpenseError, (state, { error }) => ({
    ...state,
    loading: false,
    expenses: state.expenses.map(r => {
      if (r.id === error.requestData.id) {
        state.error = true
      }
      return r
    }),
  })),
  on(ExpenseActions.updateExpenseSuccess, (state, { expense }) => ({
    ...state,
    loading: false,
    expenses: state.expenses.map(r => {
      if (r.id === expense.id) {
        return { ...r, ...expense }
      } else {
        return r
      }
    }),
  })),
  on(ExpenseActions.deleteExpense, (state, { expense }) => ({
    ...state,
    loading: false,
    expenses: state.expenses.filter(r => r !== expense),
  })),
  on(ExpenseActions.deleteExpenseError, (state, { error }) => ({
    ...state,
    loading: false,
    expenses: [...state.expenses, error.requestData],
  })),
  on(ExpenseActions.deleteExpenseSuccess, state => ({ ...state, loading: false }))
)

export function reducer(state: ExpenseState | undefined, action: Action) {
  return expenseReducer(state, action)
}
