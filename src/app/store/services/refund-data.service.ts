import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '@env/environment'
import { Refund } from '@app/core'

@Injectable()
export class RefundDataService {
  readonly api = environment.api

  constructor(private http: HttpClient) {}

  getRefunds(): Observable<Refund[]> {
    return this.http.get<Array<Refund>>(`${this.api}/refunds`)
  }
}
