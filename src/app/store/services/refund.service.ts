import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'

import { Refund } from '@app/core'

@Injectable()
export class RefundService {
  addRefund(refund: Refund): Observable<Refund> {
    return throwError({ requestData: refund })
  }
}
