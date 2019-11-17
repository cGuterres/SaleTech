import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../_models/Region';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  baseURL = 'http://localhost:5000/api/region';
  constructor(private http: HttpClient) { }

  searchAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.baseURL);
  }
}
