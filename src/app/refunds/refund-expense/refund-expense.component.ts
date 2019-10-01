import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core'

import { ExpenseDataForm, Expense } from '@app/core'

@Component({
  selector: 'app-refund-expense',
  templateUrl: './refund-expense.component.html',
  styleUrls: ['./refund-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundExpenseComponent implements OnInit {
  @Input() expense: Expense
  @Input() expenseInEditMode: boolean

  @Output() unselectExpense = new EventEmitter()
  @Output() deleteExpense = new EventEmitter()
  @Output() saveExpense = new EventEmitter()

  expenseDataForm: ExpenseDataForm

  ngOnInit() {
    this.expenseDataForm = { ...this.expense, date: new Date(this.expense.date) }
  }
}
