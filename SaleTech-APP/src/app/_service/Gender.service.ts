import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../_models/Gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  baseURL = 'http://localhost:5000/api/gender';
  constructor(private http: HttpClient) { }

  searchAllGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.baseURL);
  }
}
