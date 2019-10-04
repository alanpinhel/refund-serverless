import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { Refund, MasterDetailCommands } from '@app/core'

@Component({
  selector: 'app-refund-form',
  templateUrl: './refund-form.component.html',
  styleUrls: ['./refund-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundFormComponent implements OnInit {
  @Input() commands: MasterDetailCommands<Refund>

  @ViewChild('reason', { static: true }) reasonElement: ElementRef

  form = this.fb.group({
    reason: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setFocus()
  }

  close() {
    this.commands.close()
  }

  saveRefund() {
    const { valid, value } = this.form
    if (valid) {
      this.close()
      this.commands.add(value)
    }
  }

  setFocus() {
    this.reasonElement.nativeElement.focus()
  }
}
