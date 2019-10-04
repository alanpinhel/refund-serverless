import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { MasterDetailCommands, Expense } from '@app/core'

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseDetailComponent {
  @Input() expense: Expense
  @Input() commands: MasterDetailCommands<Expense>

  closeExpense() {
    this.commands.close()
  }

  deleteExpense() {
    this.closeExpense()
    this.commands.delete(this.expense)
  }
}
