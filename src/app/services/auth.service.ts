import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private isLoggedInStatus = false;
  // constructor() {}
  // login(username: string, password: string) {
  //   if (username === 'admin' && password === '1234') {
  //     this.isLoggedInStatus = true;
  //     localStorage.setItem('token', 'sample-token');
  //     return true;
  //   }
  //   return false;
  // }
  // logout() {
  //   this.isLoggedInStatus = false;
  //   localStorage.removeItem('token');
  // }
  // isLoggedIn() {
  //   return this.isLoggedInStatus || !!localStorage.getItem('token');
  // }

  private userRole: 'admin' | 'user' | null = null;
  login(role: 'admin' | 'user') {
    this.userRole = role;
    localStorage.setItem('role', role);
  }
  logout() {
    this.userRole = null;
    localStorage.removeItem('role');
  }

  getRole(): 'admin' | 'user' | null {
    return (
      this.userRole || (localStorage.getItem('role') as 'admin' | 'user' | null)
    );
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
