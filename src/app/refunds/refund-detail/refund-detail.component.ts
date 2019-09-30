import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { Refund } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent {
  @Input() refund: Refund
  @Input() showActions: boolean
  @Input() disableActionConfirm: boolean

  @Output() unselectRefund = new EventEmitter()
  @Output() deleteRefund = new EventEmitter()
  @Output() confirmRefund = new EventEmitter()
}
