import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { effects } from './effects'
import { reducers } from './reducers'
import { services } from '.'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('entityCache', reducers), EffectsModule.forFeature(effects)],
  providers: [...services],
})
export class AppStoreModule {}
