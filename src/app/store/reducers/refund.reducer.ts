import { createReducer, on, Action } from '@ngrx/store'

import { Refund } from '@app/core'

import * as RefundActions from '../actions'

export interface RefundState {
  refunds: Refund[]
  loading: boolean
  error: boolean
}

export const initialState: RefundState = {
  refunds: [],
  loading: false,
  error: false,
}

export const refundReducer = createReducer(
  initialState,
  on(RefundActions.addRefund, state => ({ ...state, loading: true })),
  on(RefundActions.addRefundSuccess, (state, { refund }) => ({
    ...state,
    loading: false,
    refunds: [...state.refunds, { ...refund }],
  }))
)

export function reducer(state: RefundState | undefined, action: Action) {
  return refundReducer(state, action)
}
