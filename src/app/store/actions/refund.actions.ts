import { createAction, props } from '@ngrx/store'

import { Refund } from '@app/core'

export const getRefunds = createAction('[Refund] Get Refunds')
export const getRefundsError = createAction('[Hero] Get Refunds Error', props<{ error: any }>())
export const getRefundsSuccess = createAction('[Hero] Get Refunds Success', props<{ refunds: Refund[] }>())
