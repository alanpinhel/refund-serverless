import { createReducer, on, Action } from '@ngrx/store'

import { Refund } from '@app/core'
import * as RefundActions from '../actions'

export const initialState: Refund[] = []

const refundReducer = createReducer(
  initialState,
  on(RefundActions.addRefund, (state, { refund }) => {
    const lastRefund = [...state].sort((a, b) => b.id - a.id)[0]
    return [...state, { ...refund, id: lastRefund ? lastRefund.id + 1 : 1, date: new Date().getTime(), status: 'Draft' }]
  }),
  on(RefundActions.updateRefund, (state, { refund }) => state.map(r => (r.id === refund.id ? { ...r, ...refund } : r))),
  on(RefundActions.deleteRefund, (state, { refund }) => state.filter(r => r.id !== refund.id))
)

export function reducer(state: Refund[], action: Action) {
  return refundReducer(state, action)
}
