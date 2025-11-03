import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private _authService: AuthService, private _router: Router) {}
  onLogin() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    const success = this._authService.login(this.username, this.password);
    if (success) {
      this._router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  }
}
