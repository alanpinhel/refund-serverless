import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

import { Refund } from '@app/core'
import { environment } from '@env/environment'
import { DataServiceError } from '../config'

const API = `${environment.api}/refunds`

@Injectable()
export class RefundDataService {
  constructor(private http: HttpClient) {}

  getRefunds(): Observable<Refund[]> {
    return this.http.get<Array<Refund>>(API).pipe(catchError(this.handleError()))
  }

  addRefund(refund: Refund): Observable<Refund> {
    return this.http.post<Refund>(API, refund).pipe(catchError(this.handleError(refund)))
  }

  updateRefund(refund: Refund): Observable<Refund> {
    return this.http.put(`${API}/${refund.id}`, refund).pipe(
      map(() => refund),
      catchError(this.handleError(refund))
    )
  }

  deleteRefund(refund: Refund): Observable<Refund> {
    return this.http.delete(`${API}/${refund.id}`).pipe(
      map(() => refund),
      catchError(this.handleError(refund))
    )
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData)
      return throwError(error)
    }
  }
}
