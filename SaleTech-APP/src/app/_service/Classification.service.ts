import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classification } from '../_models/Classification';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  baseURL = 'http://localhost:5000/api/classification';
  constructor(private http: HttpClient) { }

  searchAllClassification(): Observable<Classification[]> {
    return this.http.get<Classification[]>(this.baseURL);
  }
}
