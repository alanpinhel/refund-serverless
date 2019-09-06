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
  MatMenuModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatDividerModule,
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
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
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
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
