import { Component, ChangeDetectionStrategy, Input, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'

import { MasterDetailCommands, Expense, Refund } from '@app/core'

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseFormComponent implements OnInit {
  @Input() refund: Refund
  @Input() commands: MasterDetailCommands<Expense>

  @ViewChild('date', { static: true }) dateElement: ElementRef

  form = this.fb.group({
    date: ['', Validators.required],
    type: ['', Validators.required],
    amount: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setFocus()
  }

  close() {
    this.commands.close()
  }

  saveExpense() {
    const { valid, value } = this.form
    if (valid) {
      this.close()
      this.commands.add({ ...value, date: new Date(value.date).getTime(), refund: this.refund.id })
    }
  }

  setFocus() {
    this.dateElement.nativeElement.focus()
  }
}
