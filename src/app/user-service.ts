import {Injectable} from '@angular/core';
import {interval, map, Observable, take, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private email?: string;

  logIn(email: string, password: string): Observable<boolean> {
    return interval(1000).pipe(
      take(1),
      tap(() => this.email = email),
      map(() => true)
    );
  }

  isLoggedIn() {
    return this.email !== undefined;
  }

  getEmail(): string {
    if (!this.email) {
      throw new Error('User is not logged in!!');
    }
    return this.email;
  }
}
