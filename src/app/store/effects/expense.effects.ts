import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, concatMap } from 'rxjs/operators'
import { of } from 'rxjs'

import * as ExpenseActions from '../actions'
import { ExpenseDataService } from '../services/expense-data.service'

@Injectable()
export class ExpenseEffects {
  getExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.getExpenses),
      switchMap(({ refund }) =>
        this.expenseDataService.getExpenses(refund).pipe(
          map(expenses => ExpenseActions.getExpensesSuccess({ expenses })),
          catchError(error => of(ExpenseActions.getExpensesError({ error })))
        )
      )
    )
  )

  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.addExpense),
      concatMap(action =>
        this.expenseDataService.addExpense(action.expense).pipe(
          map(expense => ExpenseActions.addExpenseSuccess({ expense })),
          catchError(error => of(ExpenseActions.addExpenseError({ error })))
        )
      )
    )
  )

  updateExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.updateExpense),
      concatMap(action =>
        this.expenseDataService.updateExpense(action.expense).pipe(
          map(expense => ExpenseActions.updateExpenseSuccess({ expense })),
          catchError(error => of(ExpenseActions.updateExpenseError({ error })))
        )
      )
    )
  )

  deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.deleteExpense),
      concatMap(action =>
        this.expenseDataService.deleteExpense(action.expense).pipe(
          map(expense => ExpenseActions.deleteExpenseSuccess({ expense })),
          catchError(error => of(ExpenseActions.deleteExpenseError({ error })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private expenseDataService: ExpenseDataService) {}
}
