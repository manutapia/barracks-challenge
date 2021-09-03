import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthCredentials } from '../interfaces/auth-credentials.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private nameLocalStorageItem: string = 'barracks-challenge';

  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<any> {
    return this.http
      .post<AuthResponse>(
        `${environment.BARRACKS_URL_API}/Auth/Authenticate`,
        credentials
      )
      .pipe(
        map((response: AuthResponse) => {
          return response.token;
        }),
        catchError((error) => {
          alert(`STATUS: ${error.status}`);
          return of(null);
        })
      );
  }

  saveToken(token: string): Observable<boolean> {
    try {
      localStorage.setItem(this.nameLocalStorageItem, token);
      return of(true);
    } catch (error) {
      return of(false);
    }
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.nameLocalStorageItem);
    if (token) {
      return token;
    } else {
      return null;
    }
  }

  isLogged(): boolean {
    const token = localStorage.getItem(this.nameLocalStorageItem);
    return token ? true : false;
  }
}
