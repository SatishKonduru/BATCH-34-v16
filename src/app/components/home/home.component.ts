import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnChanges, OnInit {
  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = 'RSK';
  myInputValue: any;
  count = 0;
  constructor(private _authService: AuthService) {
    // console.log('Home Constructor called...');
  }
  onClick(value: any) {
    this.inputValue = value;
    // this.inputValue.push(value);
    this.myInputValue = value;
  }

  ngOnChanges() {
    //  console.log("Home's OnChanges called");
  }

  ngOnInit() {
    // console.log("Home's OnInit called...");
    setInterval(() => this.count++, 1000);
  }
  loginAsAdmin() {
    this._authService.login('admin');
    alert('Logged in As Admin ✅');
  }
  logout() {
    this._authService.logout();
    alert('Loggged Out ');
  }
  loginAsUser() {
    this._authService.login('user');
    alert('Logged in As User ✅');
  }
}
