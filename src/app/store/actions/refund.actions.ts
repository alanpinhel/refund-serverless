import { createAction, props } from '@ngrx/store'

import { Refund } from '@app/core'

export const addRefund = createAction('[Refund] Add Refund', props<{ refund: Refund }>())
export const addRefundError = createAction('[Refund] Add Refund Error')
export const addRefundSuccess = createAction('[Refund] Add Refund Success', props<{ refund: Refund }>())

export const getRefund = createAction('[Refund] Get Refund')
export const getRefundError = createAction('[Refund] Get Refund Error')
export const getRefundSuccess = createAction('[Refund] Get Refund Success')

export const updateRefund = createAction('[Refund] Update Refund', props<{ refund: Refund }>())
export const updateRefundError = createAction('[Refund] Update Refund Error', props<{ error: any; requestData: any }>())
export const updateRefundSuccess = createAction('[Refund] Update Refund Success', props<{ refund: Refund }>())

export const getRefunds = createAction('[Refund] Get Refunds')
export const getRefundsError = createAction('[Refund] Get Refunds Error')
export const getRefundsSuccess = createAction('[Refund] Get Refunds Success', props<{ refunds: Refund[] }>())

export const deleteRefund = createAction('[Refund] Delete Refund', props<{ refund: Refund }>())
export const deleteRefundError = createAction('[Refund] Delete Refund Error', props<{ error: any; requestData: any }>())
export const deleteRefundSuccess = createAction('[Refund] Delete Refund Success')
