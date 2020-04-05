import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/pages/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users: User[];
  loginUser: User;
  isLoggedIn = false;

  constructor() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
      this.isLoggedIn = true;
    }
  }

  login(loginUser: User) {
    this.loginUser = loginUser;
    this.isLoggedIn = true;
    console.log('Auth: logged in~~');
  }

  logout() {
    this.loginUser = null;
    this.isLoggedIn = false;
    console.log('Auth: Logged out~~');
  }
}
