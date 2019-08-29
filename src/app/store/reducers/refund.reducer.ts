import { createReducer, on, Action } from '@ngrx/store'

import { Refund } from '@app/core'
import * as RefundActions from '../actions'

export const initialState: Refund[] = []

const refundReducer = createReducer(
  initialState,
  on(RefundActions.addRefund, (state, { refund }) => [...state, refund]),
  on(RefundActions.updateRefund, (state, { refund }) => state.map(r => (r.id === refund.id ? { ...r, ...refund } : r))),
  on(RefundActions.deleteRefund, (state, { refund }) => state.filter(r => r.id !== refund.id))
)

export function reducer(state: Refund[], action: Action) {
  return refundReducer(state, action)
}
