import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../_models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseURL = 'http://localhost:5000/api/customer';
  constructor(private http: HttpClient) { }

  searchAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL);
  }

  searchCustomerByUserId(userId: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseURL}/${userId}`);
  }
}
