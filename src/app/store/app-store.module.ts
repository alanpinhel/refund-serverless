import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'

import { reducers } from './reducers'
import { services } from '.'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('entityCache', reducers)],
  providers: [...services],
})
export class AppStoreModule {}
