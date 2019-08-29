import { createAction, props } from '@ngrx/store'

import { Refund } from '@app/core'

export const addRefund = createAction('[Refund] Add Refund', props<{ refund: Refund }>())

export const updateRefund = createAction('[Refund] Update Refund', props<{ refund: Refund }>())

export const deleteRefund = createAction('[Refund] Delete Refund', props<{ refund: Refund }>())
