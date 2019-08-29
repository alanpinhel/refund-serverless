import { Injectable } from '@angular/core'
import { Store, createSelector, createFeatureSelector } from '@ngrx/store'

import { EntityState } from '../reducers'

const getEntityState = createFeatureSelector<EntityState>('entityCache')

const getRefunds = createSelector(
  getEntityState,
  (state: EntityState) => state.refunds
)

@Injectable()
export class RefundSelectors {
  constructor(private store: Store<EntityState>) {}
  refunds$ = this.store.select(getRefunds)
}
