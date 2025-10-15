import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnChanges, OnInit {
  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = 'RSK';
  myInputValue: any;
  count = 0;
  constructor() {
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
}
