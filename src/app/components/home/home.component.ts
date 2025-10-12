import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnChanges {
  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = ['RSK'];
  constructor() {
    // console.log('Home Constructor called...');
  }
  onClick(value: any) {
    // this.inputValue = value;
    this.inputValue.push(value);
  }

  ngOnChanges() {
    console.log("Home's OnChanges called");
  }
}
