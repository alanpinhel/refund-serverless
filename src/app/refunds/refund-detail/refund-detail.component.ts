import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'

import { Refund, MasterDetailCommands, Expense } from '@app/core'

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundDetailComponent implements OnInit {
  @Input() refund: Refund
  @Input() commands: MasterDetailCommands<Refund>
  @Input() subCommands: MasterDetailCommands<Expense>
  @Input() expenses: Expense[]
  @Input() readonly: boolean

  ngOnInit() {
    this.expenses = this.expenses.filter(e => e.refund === this.refund.id)
  }

  closeRefund() {
    this.commands.close()
  }

  deleteRefund() {
    this.closeRefund()
    this.commands.delete(this.refund)
  }

  confirmRefund() {
    this.closeRefund()
    this.commands.update({ ...this.refund, status: 'confirmed' })
  }

  disableConfirmRefund() {
    return !this.expenses.length
  }

  calculateTotal() {
    return this.expenses.reduce((acc, e) => acc + e.amount, 0)
  }

  enableAddMode() {
    this.subCommands.select(<any>{})
  }
}
