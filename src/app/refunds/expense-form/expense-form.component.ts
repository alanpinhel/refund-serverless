import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { MasterDetailCommands, Expense } from '@app/core'

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseFormComponent {
  @Input() commands: MasterDetailCommands<Expense>
}
