import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from './reducers'
import { effects } from './effects'
import { services } from '.'

@NgModule({
  imports: [CommonModule, HttpClientModule, StoreModule.forFeature('entityCache', reducers), EffectsModule.forFeature(effects)],
  providers: [...services],
})
export class AppStoreModule {}
