import { createAction, props } from '@ngrx/store'

import { Expense } from '@app/core'
import { DataServiceError } from '../config'

export const createExpenseAction = (actionType: string) => createAction(actionType, props<{ expense: Expense }>())
export const createExpenseErrorAction = (actionType: string) => createAction(actionType, props<{ error: DataServiceError<Expense> }>())

export const getExpenses = createAction('[Expense] Get Expenses', props<{ refund: string }>())
export const getExpensesError = createExpenseErrorAction('[Expense] Get Expenses Error')
export const getExpensesSuccess = createAction('[Expense] Get Expenses Success', props<{ expenses: Expense[] }>())

export const addExpense = createExpenseAction('[Expense] Add Expense')
export const addExpenseError = createExpenseErrorAction('[Expense] Add Expense Error')
export const addExpenseSuccess = createExpenseAction('[Expense] Add Expense Success')

export const updateExpense = createExpenseAction('[Expense] Update Expense')
export const updateExpenseError = createExpenseErrorAction('[Expense] Update Expense Error')
export const updateExpenseSuccess = createExpenseAction('[Expense] Update Expense Success')

export const deleteExpense = createExpenseAction('[Expense] Delete Expense')
export const deleteExpenseError = createExpenseErrorAction('[Expense] Delete Expense Error')
export const deleteExpenseSuccess = createExpenseAction('[Expense] Delete Expense Success')
