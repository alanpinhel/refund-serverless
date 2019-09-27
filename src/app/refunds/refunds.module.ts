import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '@app/shared'
import { RefundsComponent } from './refunds/refunds.component'
import { RefundListComponent } from './refund-list.component'
import { RefundFormComponent } from './refund-form.component'
import { RefundDetailComponent } from './refund-detail.component'

const routes: Routes = [{ path: '', pathMatch: 'full', component: RefundsComponent }]

@NgModule({
  declarations: [RefundsComponent, RefundListComponent, RefundFormComponent, RefundDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  entryComponents: [RefundFormComponent],
})
export class RefundsModule {}
