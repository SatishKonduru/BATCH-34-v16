import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'BATCH-34-v16';
  constructor() {
    // console.log('App Constructor Called....');
  }

  ngOnChanges() {
    console.log("App's OnChanges called....");
  }
}
