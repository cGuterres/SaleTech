import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserSys } from '../_models/UserSys';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:5000/api/user';
  jwtHelper = new JwtHelperService();
  decodeToken: any;
  private currentUserSubject: BehaviorSubject<UserSys>;
  public currentUser: Observable<UserSys>;

  // chamadas para a controller
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserSys>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserSys {
    return this.currentUserSubject.value;
  }

  login(model: any) {
    return this.http.post(`${this.baseURL}/login`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user.userLogin));
          this.currentUserSubject.next(user.userLogin);
          localStorage.setItem('token', user.token);
          this.decodeToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // verifica se o token está ativo ainda
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUser(id: number): Observable<UserSys> {
    return this.http.get<UserSys>(`${this.baseURL}/${id}`);
  }

  searchAllSellers(): Observable<UserSys[]> {
    return this.http.get<UserSys[]>(this.baseURL);
  }
}
