import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

import { Expense } from '@app/core'
import { environment } from '@env/environment'
import { DataServiceError } from '../config'

const API = `${environment.api}/expenses`

@Injectable()
export class ExpenseDataService {
  constructor(private http: HttpClient) {}

  getExpenses(refund: string): Observable<Expense[]> {
    return this.http.get<Array<Expense>>(API, { params: { refund } }).pipe(catchError(this.handleError()))
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(API, expense).pipe(catchError(this.handleError(expense)))
  }

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put(`${API}/${expense.id}`, expense).pipe(
      map(() => expense),
      catchError(this.handleError(expense))
    )
  }

  deleteExpense(expense: Expense): Observable<Expense> {
    return this.http.delete(`${API}/${expense.id}`).pipe(
      map(() => expense),
      catchError(this.handleError(expense))
    )
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData)
      return throwError(error)
    }
  }
}
