import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, concatMap } from 'rxjs/operators'
import { of } from 'rxjs'

import * as RefundActions from '../actions'
import { RefundDataService } from '../services/refund-data.service'

@Injectable()
export class RefundEffects {
  getRefunds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RefundActions.getRefunds),
      switchMap(() =>
        this.refundDataService.getRefunds().pipe(
          map(refunds => RefundActions.getRefundsSuccess({ refunds })),
          catchError(error => of(RefundActions.getRefundsError({ error })))
        )
      )
    )
  )

  addRefund$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RefundActions.addRefund),
      concatMap(action =>
        this.refundDataService.addRefund(action.refund).pipe(
          map(refund => RefundActions.addRefundSuccess({ refund })),
          catchError(error => of(RefundActions.addRefundError({ error })))
        )
      )
    )
  )

  updateRefund$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RefundActions.updateRefund),
      concatMap(action =>
        this.refundDataService.updateRefund(action.refund).pipe(
          map(refund => RefundActions.updateRefundSuccess({ refund })),
          catchError(error => of(RefundActions.updateRefundError({ error })))
        )
      )
    )
  )

  deleteRefund$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RefundActions.deleteRefund),
      concatMap(action =>
        this.refundDataService.deleteRefund(action.refund).pipe(
          map(refund => RefundActions.deleteRefundSuccess({ refund })),
          catchError(error => of(RefundActions.deleteRefundError({ error })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private refundDataService: RefundDataService) {}
}
