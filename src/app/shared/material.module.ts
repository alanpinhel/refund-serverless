import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatCheckboxModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
