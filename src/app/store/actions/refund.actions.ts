import { createAction, props } from '@ngrx/store'

import { Refund } from '@app/core'
import { DataServiceError } from '../config'

export const createRefundAction = (actionType: string) => createAction(actionType, props<{ refund: Refund }>())
export const createRefundErrorAction = (actionType: string) => createAction(actionType, props<{ error: DataServiceError<Refund> }>())

export const getRefunds = createAction('[Refund] Get Refunds')
export const getRefundsError = createRefundErrorAction('[Refund] Get Refunds Error')
export const getRefundsSuccess = createAction('[Refund] Get Refunds Success', props<{ refunds: Refund[] }>())

export const addRefund = createRefundAction('[Refund] Add Refund')
export const addRefundError = createRefundErrorAction('[Refund] Add Refund Error')
export const addRefundSuccess = createRefundAction('[Refund] Add Refund Success')

export const updateRefund = createRefundAction('[Refund] Update Refund')
export const updateRefundError = createRefundErrorAction('[Refund] Update Refund Error')
export const updateRefundSuccess = createRefundAction('[Refund] Update Refund Success')

export const deleteRefund = createRefundAction('[Refund] Delete Refund')
export const deleteRefundError = createRefundErrorAction('[Refund] Delete Refund Error')
export const deleteRefundSuccess = createRefundAction('[Refund] Delete Refund Success')
