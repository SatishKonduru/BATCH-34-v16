import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges {
  @Input() message: string[];
  constructor() {
    // console.log('Demo Constructor called....');
    // console.log(
    //   'Message Value in Demo constructor from Home Component: ',
    //   this.message
    // );
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Demo's OnChanges called....", this.message);
    console.log('Changes: ', changes);
  }
}
