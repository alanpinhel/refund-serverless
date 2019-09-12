import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
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

  constructor(private actions$: Actions, private refundDataService: RefundDataService) {}
}
