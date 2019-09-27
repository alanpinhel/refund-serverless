import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent {
  @Input() refund: Refund
  @Input() commands: MasterDetailCommands<Refund>

  showActions() {
    return this.refund.status === 'draft'
  }

  disableActionConfirm() {
    return !this.refund.expenses.length
  }

  handleBack() {
    this.commands.close()
  }

  handleDelete() {
    this.commands.delete(this.refund)
  }

  handleConfirm() {
    this.commands.close()
    this.commands.update({ ...this.refund, status: 'confirmed' })
  }
}
