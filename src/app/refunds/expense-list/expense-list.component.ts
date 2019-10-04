import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Expense, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseListComponent {
  @Input() expenses: Expense[]
  @Input() commands: MasterDetailCommands<Expense>
  @Input() readonly: boolean

  onSelect(expense: Expense) {
    this.commands.select(expense)
  }
}
