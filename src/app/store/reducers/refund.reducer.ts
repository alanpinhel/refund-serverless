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
  on(RefundActions.addRefund, state => ({ ...state, loading: true })),
  on(RefundActions.addRefundError, state => ({ ...state, loading: false })),
  on(RefundActions.addRefundSuccess, (state, { refund }) => ({
    ...state,
    loading: false,
    refunds: [...state.refunds, { ...refund }],
  })),
  on(RefundActions.updateRefund, (state, { refund }) => ({
    ...state,
    refunds: state.refunds.map(r => {
      if (r.id === refund.id) {
        state.loading = true
      }
      return r
    }),
  })),
  on(RefundActions.updateRefundError, (state, { requestData }) => ({
    ...state,
    loading: false,
    refunds: state.refunds.map(r => {
      if (r.id === requestData.id) {
        state.error = true
      }
      return r
    }),
  })),
  on(RefundActions.updateRefundSuccess, (state, { refund }) => ({
    ...state,
    loading: false,
    refunds: state.refunds.map(r => {
      if (r.id === refund.id) {
        return { ...r, ...refund }
      } else {
        return r
      }
    }),
  })),
  on(RefundActions.getRefunds, state => ({ ...state, loading: true })),
  on(RefundActions.getRefundsError, state => ({ ...state, loading: false })),
  on(RefundActions.getRefundsSuccess, (state, { refunds }) => ({
    ...state,
    loading: false,
    refunds,
  })),
  on(RefundActions.deleteRefund, (state, { refund }) => ({
    ...state,
    loading: true,
    refunds: state.refunds.filter(r => r !== refund),
  })),
  on(RefundActions.deleteRefundError, (state, { requestData }) => ({
    ...state,
    loading: false,
    refunds: [...state.refunds, requestData],
  })),
  on(RefundActions.deleteRefundSuccess, state => ({ ...state, loading: false }))
)

export function reducer(state: RefundState, action: Action) {
  return refundReducer(state, action)
}
