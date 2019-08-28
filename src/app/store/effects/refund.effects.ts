import { Injectable } from '@angular/core'
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { throwError, of } from 'rxjs'

import { RefundService } from '../services'
import * as RefundActions from '../actions'

@Injectable()
export class RefundEffects {
  addRefund$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RefundActions.addRefund),
      mergeMap(({ refund }) =>
        this.refundService.addRefund(refund).pipe(
          map(refund => RefundActions.addRefundSuccess({ refund })),
          catchError((e: any) => {
            return of(RefundActions.addRefundError())
          })
        )
      )
    )
  )

  constructor(private actions$: Actions, private refundService: RefundService) {}
}
