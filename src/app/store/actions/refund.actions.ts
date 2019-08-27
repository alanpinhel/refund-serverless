import { createAction, props } from '@ngrx/store'
import { Refund } from '@app/core'

export const addRefund = createAction('[Refund] Add Refund')
export const addRefundError = createAction('[Refund] Add Refund Error')
export const addRefundSuccess = createAction(
  '[Refund] Add Refund Success',
  props<{ refund: Refund }>()
)
