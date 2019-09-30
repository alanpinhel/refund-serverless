import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'
import { Expense } from '@app/core'

@Component({
  selector: 'app-refund-expense',
  templateUrl: './refund-expense.component.html',
  styleUrls: ['./refund-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundExpenseComponent {
  @Input() expense: Expense
  @Input() expenseInEditMode: boolean

  @Output() unselectExpense = new EventEmitter()
  @Output() deleteExpense = new EventEmitter()
  @Output() saveExpense = new EventEmitter()
}
