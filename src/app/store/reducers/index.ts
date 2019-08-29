import { ActionReducerMap } from '@ngrx/store'

import { Refund } from '@app/core'
import * as fromRefunds from './refund.reducer'

export interface EntityState {
  refunds: Refund[]
}

export const reducers: ActionReducerMap<EntityState> = {
  refunds: fromRefunds.reducer,
}
