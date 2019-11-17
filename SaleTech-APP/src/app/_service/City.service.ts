import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../_models/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseURL = 'http://localhost:5000/api/city';
  constructor(private http: HttpClient) { }

  searchAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseURL);
  }
}
