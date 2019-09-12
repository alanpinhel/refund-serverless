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

const refundReducer = createReducer(
  initialState,
  on(RefundActions.getRefunds, state => ({ ...state, loading: true })),
  on(RefundActions.getRefundsError, state => ({ ...state, loading: false })),
  on(RefundActions.getRefundsSuccess, (state, { refunds }) => ({
    ...state,
    loading: false,
    refunds,
  }))
)

export function reducer(state: RefundState | undefined, action: Action) {
  return refundReducer(state, action)
}
