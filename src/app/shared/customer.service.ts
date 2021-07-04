import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private _http: HttpClient
  ) { }

  getCustomerDetails(custId?): Observable<any> {
    const apiUrl = custId ? `${environment.baseUrl}/${custId}` : `${environment.baseUrl}`;
    return this._http.get(apiUrl);
  }
}
