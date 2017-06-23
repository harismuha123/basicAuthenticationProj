import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable()
export class RegisterServiceService {

  private users: {[key: string]: string} = {};
  private validUser: string;

  constructor() { }

  registerUser(username: string, password: string) {
    this.users[username] = password;
  }

  login(username: string, password: string): Observable<boolean> {
    if (this.users[username]) {
      if (password === this.users[username]) {
          this.validUser = username;
          return Observable.of(true);
      }
      return Observable.throw('Invalid password!');
    }
    return Observable.throw('Username not found!');
  }

  logout() {
    this.validUser = undefined;
  }

  getCurrentUser() {
    return Observable.of(this.validUser);
  }
}
